from datetime import datetime
from random import Random
from time import sleep
from typing import Type

from src.sensor.sensor_interface import SensorInterface

from src.toolkit.constants import signal_list, signal_lock
from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_type import SensorType

from src.toolkit.jsonfy import jsonfy


class AirPollutionSensor(SensorInterface):
    # __noise = None
    __is_polluted = False
    __PM_25 = 5
    __PM_10 = 15
    __O3 = 60
    __NO2 = 10
    # __SO2 = 40
    # __CO = 4000

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        super().__init__(sensor_name, gather_time, coordinates, socrates, temporal_second_delay)
        # self.__noise = self._socrates.uniform(0.0, 10.0)

    def getType(self) -> str:
        return SensorType.AIR_POLLUTION

    def _send_signal(self) -> None:
        sleep(self._temporal_second_delay)
        with signal_lock[SensorType.AIR_POLLUTION]:
            signal_list[SensorType.AIR_POLLUTION].append(self._sensor_id)

    def simulate(self) -> str:
        if self.__is_polluted:
            self.__is_polluted = False
            self.__PM_25 += self._socrates.uniform(15,20)
            self.__PM_10 += self._socrates.uniform(15,20)
            self.__O3 += self._socrates.uniform(30,40)
            self.__NO2 += self._socrates.uniform(15,20)
            # self.__SO2 += self._socrates.uniform()
            # self.__CO += self._socrates.uniform()
        else:
            self.__PM_25 += self._socrates.uniform(0,2) - self._socrates.uniform(0,2)
            self.__PM_10 += self._socrates.uniform(0,2) - self._socrates.uniform(0,2)
            self.__O3 += self._socrates.uniform(0,2) - self._socrates.uniform(0,2)
            self.__NO2 += self._socrates.uniform(0,2) - self._socrates.uniform(0,2)
            # self.__SO2 += self._socrates.uniform() - self._socrates.uniform()
            # self.__CO += self._socrates.uniform() - self._socrates.uniform()
            if self._socrates.uniform(0,1) > 0.9:
                self.__is_polluted = True

        reading = {
            "type": "\u03BCg/m^3",
            "PM2.5": round(self.__PM_25),
            "PM10": round(self.__PM_10),
            "O3": round(self.__O3),
            "NO2": round(self.__NO2)
            # "SO2": round(self.__SO2),
            # "CO": round(self.__CO)
        }
        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.AIR_POLLUTION,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings=[reading]
        )
