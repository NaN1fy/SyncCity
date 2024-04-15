from typing import Type
from datetime import datetime

from src.sensor.sensor_interface import SensorInterface

from src.toolkit.coordinates import Coordinates

class TemperatureSensor(SensorInterface):
    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates):
        super().__init__(sensor_name, gather_time, coordinates)

    def simulate(self) -> str:
        data = f"lettura fittizzia il {self._gather_time.now()} da parte del sensore {self._sensor_name} con coordinate {self._coordinates.toJson()}"
        return data
