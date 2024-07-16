import numpy as np

from datetime import datetime, timedelta
from random import Random
from time import sleep
from typing import Type

from src.sensor.sensor_interface import SensorInterface

from src.toolkit.constants import signal_list, signal_lock
from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_type import SensorType

from src.toolkit.jsonfy import jsonfy


class PrecipitationIntensitySensor(SensorInterface):
    # __noise = None
    __is_raining: bool = False
    __rain = 0.0
    __start_time = None
    __duration = 0
    __max_rain: float

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        super().__init__(sensor_name, gather_time, coordinates, socrates, temporal_second_delay)
        # self.__noise = self._socrates.uniform(0.0, 10.0)

    def getType(self) -> str:
        return SensorType.PRECIPITATION_INTENSITY

    def _send_signal(self) -> None:
        with signal_lock[SensorType.PRECIPITATION_INTENSITY]:
            signal_list[SensorType.PRECIPITATION_INTENSITY].append(self._sensor_id)
        if self.__is_raining:
            sleep(self._temporal_second_delay * 5)
        else:
            sleep(self._temporal_second_delay * 10)

    def simulate(self) -> str:
        if not self.__is_raining and self._socrates.uniform(0, 1) > 0.75:
            self.__is_raining = True
            self.__start_time = self._gather_time.now()
            secs = self._socrates.randint(120, 600)
            self.__duration = timedelta(seconds=secs)
            self.__max_rain = self._socrates.uniform(2, 8)
        if self.__is_raining:
            current = self._gather_time.now()
            progress = (current - self.__start_time) / self.__duration
            base_rain = 0
            if progress <= 1.0:
                if progress <= 0.3:
                    factor = progress / 0.3
                    base_rain = self.__max_rain * factor
                if progress > 0.3 and progress <= 0.75:
                    base_rain = self.__max_rain
                if progress > 0.75:
                    factor = (1.0 - progress) * 0.25
                    # factor = np.sin(np.pi * progress)
                    base_rain = self.__max_rain * factor
                self.__rain = base_rain + np.random.normal(0,0.1)
            # self.__intensity += (self._socrates.uniform(0, 1) - self.__intensity) * 0.4
            # if self.__intensity < 0.3:
            #     self.__rain -= self._socrates.uniform(0, 0.5)
            # if self.__intensity > 0.3 and self.__intensity < 0.60:
            #     self.__rain += self._socrates.uniform(-0.5, 0.5)
            # if self.__intensity > 0.6 and self.__intensity < 0.85:
            #     self.__rain += self._socrates.uniform(-0.5, 2)
            # if self.__intensity > 0.85:
            #     self.__rain += self._socrates.uniform(3, 8)
            # if self.__intensity > 0.95:
            #     self.__rain += self._socrates.uniform(5, 12)
            if self.__rain <= 0.0:
                self.__rain = 0.0
                self.__is_raining = False
                self.__start_time = None
                self.__duration = 0
        reading = {
            "type": "mm/h",
            "value": round(self.__rain,1)
        }
        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.PRECIPITATION_INTENSITY,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings=[reading]
        )
