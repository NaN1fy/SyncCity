from abc import ABC, abstractmethod
from datetime import datetime
from typing import Type

from src.toolkit.coordinates import Coordinates

class SensorInterface(ABC):
    _sensor_name: str
    _gather_time: Type[datetime]
    _coordinates: Coordinates

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates):
        self._sensor_name = sensor_name
        self._gather_time = gather_time
        self._coordinates = coordinates

    @abstractmethod
    def simulate(self) -> str:
        pass

