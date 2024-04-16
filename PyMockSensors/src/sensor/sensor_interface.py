from abc import ABC, abstractmethod
from datetime import datetime
from random import Random
from typing import Type

from src.toolkit.coordinates import Coordinates

class SensorInterface(ABC):
    _sensor_name: str
    _gather_time: Type[datetime]
    _coordinates: Coordinates
    _socrates: Random

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random):
        self._sensor_name = sensor_name
        self._gather_time = gather_time
        self._coordinates = coordinates
        self._socrates = socrates

    @abstractmethod
    def simulate(self) -> str:
        pass
