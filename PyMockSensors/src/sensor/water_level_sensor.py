from datetime import datetime, timedelta
from random import Random
from time import sleep
from typing import Type

import math

from src.sensor.sensor_interface import SensorInterface

from src.toolkit.constants import signal_list, signal_lock
from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_type import SensorType

from src.toolkit.jsonfy import jsonfy


class WaterLevelSensor(SensorInterface):
    __percentage: float
    
    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        super().__init__(sensor_name, gather_time, coordinates, socrates, temporal_second_delay)
        self.__set_water_level()

    def getType(self) -> str:
        return SensorType.WATER_LEVEL

    def _send_signal(self) -> None:
        sleep(self._temporal_second_delay)
        with signal_lock[SensorType.WATER_LEVEL]:
            signal_list[SensorType.WATER_LEVEL].append(self._sensor_id)

    def __set_water_level(self) -> None:
        month = self._gather_time.now().month
        if 3 <= month <= 4:
            self.__percentage = self._socrates.uniform(60, 70)
        elif 5 <= month <= 6:
            self.__percentage = self._socrates.uniform(70, 80)
        elif 7 <= month <= 8:
            self.__percentage = self._socrates.uniform(30, 40)
        elif 9 <= month <= 10:
            self.__percentage = self._socrates.uniform(50, 60)
        elif 11 <= month <= 12:
            self.__percentage = self._socrates.uniform(60, 70)
        else:
            self.__percentage = self._socrates.uniform(70, 80)
    
    def __evaporation_rate(self) -> float:
        hour = self._gather_time.now().hour
        month = self._gather_time.now().month
        rate = ((math.cos(math.pi * ((hour - 12) / 12)) + 1) / 2) * 0.4 + 0.3

        if 3 <= month <= 5:
            rate += 0.1
        elif 6 <= month <= 8:
            rate += 0.3
        elif 9 <= month <= 11:
            rate -= 0.1
        else:
            rate -= 0.2
        return max(0, min(1, rate))

    def simulate(self) -> str:
        evaporation_rate = self.__evaporation_rate()
        change_in_percentage = self._socrates.uniform(-0.1, 0.1) * evaporation_rate
        self.__percentage = max(0, min(100, self.__percentage + change_in_percentage))

        reading = {
            "type": "%",
            "value": round(self.__percentage, 2)
        }

        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.WATER_LEVEL,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings=[reading]
        )




