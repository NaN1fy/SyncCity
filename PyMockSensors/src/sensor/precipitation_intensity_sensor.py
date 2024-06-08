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

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        super().__init__(sensor_name, gather_time, coordinates, socrates, temporal_second_delay)
        # self.__noise = self._socrates.uniform(0.0, 10.0)

    def getType(self) -> str:
        return SensorType.PRECIPITATION_INTENSITY

    def _send_signal(self) -> None:
        sleep(self._temporal_second_delay)
        with signal_lock[SensorType.HUMIDITY]:
            signal_list[SensorType.HUMIDITY].append(self._sensor_id)

    def simulate(self) -> str:
        now = self._gather_time.now()
        hour = int(now.strftime("%H"))
        month = now.month
        absolute_humidity, night_saturation, mid_saturation, noon_saturation = HUMID_RANGE[int(month)]
        variance = self._socrates.random()
        absolute_value = self._socrates.uniform(absolute_humidity - variance, absolute_humidity + variance)
        if (hour >= 5 and hour < 11) or (hour >= 17 and hour < 23):
            simulated_value = round((absolute_value / mid_saturation) * 100)
        if hour >= 11 and hour < 17:
            simulated_value = round((absolute_value / noon_saturation) * 100)
        if hour >= 23 or hour < 5:
            simulated_value = round((absolute_value / night_saturation) * 100)
        if simulated_value > 100: 
            simulated_value = 100
        reading = {
            "type": "%",
            "value": simulated_value
        }
        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.HUMIDITY,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings=[reading]
        )
