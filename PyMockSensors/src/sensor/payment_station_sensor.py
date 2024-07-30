from datetime import datetime
from random import Random
from time import sleep
from typing import Type

from src.toolkit.constants import signal_list, signal_lock, SEC_IN_HOUR
from src.toolkit.coordinates import Coordinates
from src.sensor.sensor_interface import SensorInterface

from src.toolkit.sensor_type import SensorType

from src.toolkit.jsonfy import jsonfy


class PaymentStationSensor(SensorInterface):
    __bill: float = 0.0
    __price_per_kwh: float

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        super().__init__(sensor_name, gather_time, coordinates, socrates, temporal_second_delay)
        self.__price_per_kwh = self._socrates.uniform(0.4, 0.8) 

    def getType(self) -> str:
        return SensorType.PAYMENT_STATION

    def _send_signal(self) -> None:
        # sleeping_time = self._socrates.randint(120, SEC_IN_HOUR / 2)
        sleeping_time = self._socrates.randint(100, 300)
        sleep(sleeping_time)
        with signal_lock[SensorType.PAYMENT_STATION]:
            signal_list[SensorType.PAYMENT_STATION].append(self._sensor_id)

    def simulate(self) -> str:
        self.__bill = round(self._socrates.randint(300, 2 * SEC_IN_HOUR) * self.__price_per_kwh / SEC_IN_HOUR, 2)

        reading = {
            "type": "€/kWh",
            "value": self.__bill
        }

        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.PAYMENT_STATION,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings= [reading]
        )
