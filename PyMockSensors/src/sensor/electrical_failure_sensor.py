import re
import string

from datetime import datetime, timedelta
from random import Random
from time import sleep
from typing import Type

from src.toolkit.constants import signal_list, signal_lock, SEC_IN_HOUR
from src.toolkit.coordinates import Coordinates
from src.sensor.sensor_interface import SensorInterface

from src.toolkit.sensor_type import SensorType

from src.toolkit.jsonfy import jsonfy

class ElectricalFailureSensor(SensorInterface):
    __is_ok = True
    __repair_time = 0
    __occurrence = None
   
    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        super().__init__(sensor_name, gather_time, coordinates, socrates, temporal_second_delay)

    def getType(self) -> str:
        return SensorType.ELECTRICAL_FAILURE

    def _send_signal(self) -> None:
        sleep(self._temporal_second_delay)
        if self.__is_ok:
            with signal_lock[SensorType.ELECTRICAL_FAILURE]:
                signal_list[SensorType.ELECTRICAL_FAILURE].append(self._sensor_id) 
        elif not self.__is_ok and self._gather_time.now() > (self.__occurrence + timedelta(seconds = self.__repair_time)):
            with signal_lock[SensorType.ELECTRICAL_FAILURE]:
                signal_list[SensorType.ELECTRICAL_FAILURE].append(self._sensor_id)

    def simulate(self) -> str:
        random_value = self._socrates.uniform(0, 1)
        if self.__is_ok and random_value > 0.98:
            self.__is_ok = False
            self.__occurrence = self._gather_time.now()
            self.__repair_time = self._socrates.uniform(60, 180)
        else:
            self.__is_ok = True
            self.__occurrence = self._gather_time.now()
            self.__repair_time = 0
        reading = {
            "is_ok" : self.__is_ok,
            "occurrence" : str(self.__occurrence),
            "repair_time" : round(self.__repair_time, 2)
        }

        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.ELECTRICAL_FAILURE,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings=[reading]
        )
