from datetime import datetime
from math import cos, pi
from random import Random
from typing import Type

from src.sensor.sensor_interface import SensorInterface

from src.toolkit.constants import SEC_IN_DAY, SEC_IN_HOUR, TEMP_RANGE
from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_type import SensorType

from src.toolkit.jsonfy import jsonfy


class TemperatureSensor(SensorInterface):
    __noise = None

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random):
        super().__init__(sensor_name, gather_time, coordinates, socrates)
        self.__noise = self._socrates.uniform(-0.02, 0.02)

    def simulate(self) -> str:
        now = self._gather_time.now()
        hour = now.strftime("%H")
        coldest_hour = 4
        seconds = now.timestamp() % SEC_IN_DAY
        common_min, common_max = TEMP_RANGE[int(hour)]
        coldest_hour_in_sec = coldest_hour * SEC_IN_HOUR
        amplitude = (common_max - common_min) / 2
        wavelength = 24 * SEC_IN_HOUR
        simulated_value = common_max - amplitude * -1 * cos(
            2 * pi * 1 / wavelength * seconds - 2 * pi * coldest_hour_in_sec / wavelength)
        simulated_value = round(simulated_value * (1 + round(self.__noise, 3)), 2) + round(self._socrates.random(), 2)
        reading = {
            "type": "Degrees Celsius",
            "value": round(simulated_value, 2)
        }
        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.TEMPERATURE,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings=[reading]
        )
