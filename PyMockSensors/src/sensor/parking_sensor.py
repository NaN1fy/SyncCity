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

class ParkingSensor(SensorInterface):
    __is_available: bool = True
    __plate: str = ''
    __lay_off: int = 0
    __arrival: None
   
    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        super().__init__(sensor_name, gather_time, coordinates, socrates, temporal_second_delay)

    def getType(self) -> str:
        return SensorType.PARKING

    def _send_signal(self) -> None:
        now = self._gather_time.now()
        gambling = self._socrates.randint(0, 100)
        cool_down = self._socrates.randint(5, 20)
        if not self.__is_available:
            if now > (self.__arrival + timedelta(seconds = self.__lay_off)):
                with signal_lock[SensorType.PARKING]:
                    signal_list[SensorType.PARKING].append(self._sensor_id) 
        elif self.__is_available:
            sleep(cool_down)
            if gambling < 30:
                with signal_lock[SensorType.PARKING]:
                    signal_list[SensorType.PARKING].append(self._sensor_id)

    def __generate_plate(self) -> str:
        pattern = re.compile(r"^[A-Z]{2}[\d]{3}[A-Z]{2}$")
        while True:
            group1 = ''.join(self._socrates.choices(string.ascii_uppercase, k=2))
            group2 = ''.join(self._socrates.choices(string.digits, k=3))
            group3 = ''.join(self._socrates.choices(string.ascii_uppercase, k=2))
            plate = f"{group1}{group2}{group3}"
            if pattern.match(plate):
                return plate

    def simulate(self) -> str:
        if self.__is_available:
            self.__is_available = False
            self.__plate = self.__generate_plate()
            # self.__lay_off = self._socrates.randint(300, SEC_IN_HOUR*2)
            self.__lay_off = self._socrates.randint(100, 300)
            self.__arrival = self._gather_time.now()
        else:
            self.__is_available = True
            self.__plate = ''
            self.__lay_off = 0
            self.__arrival = None

        reading = {
            "is_available": self.__is_available,
            "lay_off": self.__lay_off,
            "plate": self.__plate
        }

        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.PARKING,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings= [reading]
        )
