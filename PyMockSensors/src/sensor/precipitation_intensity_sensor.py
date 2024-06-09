from datetime import datetime
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
    __rain = 0
    __intensity = 0

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        super().__init__(sensor_name, gather_time, coordinates, socrates, temporal_second_delay)
        # self.__noise = self._socrates.uniform(0.0, 10.0)

    def getType(self) -> str:
        return SensorType.PRECIPITATION_INTENSITY

    def _send_signal(self) -> None:
        if self.__is_raining:
            sleep(self._temporal_second_delay)
        else:
            sleep(self._temporal_second_delay*10)
        with signal_lock[SensorType.PRECIPITATION_INTENSITY]:
            signal_list[SensorType.PRECIPITATION_INTENSITY].append(self._sensor_id)

    def simulate(self) -> str:
        if self.__is_raining:
            self.__intensity += self._socrates.uniform(-self.__intensity, 1 - self.__intensity) * 0.7
            if self.__intensity < 0.25:
                self.__rain -= self._socrates.uniform(0,2)
            if self.__intensity > 0.25 and self.__intensity < 0.60:
                self.__rain += self._socrates.uniform(0,1) - self._socrates.uniform(0,1)
            if self.__intensity > 0.6 and self.__intensity < 0.85:
                self.__rain += self._socrates.randint(0,2)
            if self.__intensity > 0.85:
                self.__rain += self._socrates.randint(5,10)
            if self.__intensity > 0.95:
                self.__rain += self._socrates.randint(10,15)
        if not self.__is_raining and self._socrates.uniform(0,1) > 0.7:
            self.__is_raining = True
            self.__rain = self._socrates.uniform(0,2)
        if self.__is_raining and self.__rain <= 0:
            self.__rain = 0
            self.__is_raining = False
        reading = {
            "type": "mm/h",
            "value": self.__rain
        }
        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.PRECIPITATION_INTENSITY,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings=[reading]
        )
