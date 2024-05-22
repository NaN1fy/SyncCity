import json
import numpy as np
import re
import string

from dataclasses import dataclass
from datetime import datetime, timedelta
from random import Random
from random import randint
from time import sleep
from typing import Dict, Type

from src.toolkit.constants import signal_list, signal_lock, SEC_IN_HOUR
from src.toolkit.coordinates import Coordinates
from src.sensor.sensor_interface import SensorInterface

from src.toolkit.sensor_type import SensorType

from src.toolkit.jsonfy import jsonfy


class PaymentParkingSensor(SensorInterface):
    __bill: float = 0.0
    __price_per_hour: float
    __payment_timestamp: datetime = None

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        super().__init__(sensor_name, gather_time, coordinates, socrates, temporal_second_delay)
        self.__price_per_hour = self.__socrates.uniform(1.1, 1.5)

    def getType(self) -> str:
        return SensorType.PAYMENT_PARKING

    def _send_signal(self) -> None:
        sleeping_time = self._socrates.randint(120, SEC_IN_HOUR / 2)
        sleep(sleeping_time)
        with signal_lock[SensorType.PAYMENT_PARKING]:
            signal_list[SensorType.PAYMENT_PARKING] = np.append(signal_list[SensorType.PAYMENT_PARKING], self._sensor_id)

    def simulate(self) -> str:
        self.__bill = round(self._socrates.randint(300, 2 * SEC_IN_HOUR) * self.__price_per_hour, 2)
        self.__payment_timestamp = self._gather_time.now()

        reading = {
            "bill": self.__bill,
            "payment_timestamp": self.__payment_timestamp
        }

        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.PARKING,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings= [reading]
        )
