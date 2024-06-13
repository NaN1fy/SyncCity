from datetime import datetime
from random import Random, uniform
from time import sleep
from typing import Type
import math

from src.sensor.sensor_interface import SensorInterface
from src.toolkit.constants import SEC_IN_DAY, SEC_IN_HOUR, signal_list, signal_lock
from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_type import SensorType
from src.toolkit.jsonfy import jsonfy

class WasteFillingSensor(SensorInterface):
    __percentage: float
    __noise: float
    __max_capacity: float
    __current_fill: float
    __last_update_time: datetime

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        super().__init__(sensor_name, gather_time, coordinates, socrates, temporal_second_delay)
        self.__percentage = 0.0
        self.__max_capacity = 100.0
        self.__current_fill = 0.0
        self.__noise = self._socrates.uniform(-0.005, 0.005)
        self.__last_update_time = self._gather_time.now()

    def getType(self) -> str:
        return SensorType.WASTE_FILLING

    def _send_signal(self) -> None:
        sleep(self._temporal_second_delay)
        with signal_lock[SensorType.WASTE_FILLING]:
            signal_list[SensorType.WASTE_FILLING].append(self._sensor_id)

    def __update_fill_level(self):
        now = self._gather_time.now()
        elapsed_seconds = (now - self.__last_update_time).total_seconds()
        elapsed_hours = elapsed_seconds / SEC_IN_HOUR

        fill_change_rate = 0.0

        if 8 <= now.hour <= 22:
            fill_change_rate += self._socrates.uniform(5, 10) * (1 - self.__current_fill / self.__max_capacity)
        else:
            fill_change_rate -= self._socrates.uniform(2, 4.5)

        fill_change = fill_change_rate * elapsed_hours
        self.__current_fill = max(0, min(self.__max_capacity, self.__current_fill + fill_change))

        self.__last_update_time = now

    def simulate(self) -> str:
        self.__update_fill_level()

        self.__percentage = (self.__current_fill / self.__max_capacity) * 100 + self.__noise
        self.__percentage = max(0, min(100, self.__percentage))

        reading = {
            "type": "%",
            "value": round(self.__percentage, 2)
        }

        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.WASTE_FILLING,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings=[reading]
        )

