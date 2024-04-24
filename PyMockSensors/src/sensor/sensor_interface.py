from abc import ABC, abstractmethod
from datetime import datetime
from random import Random
from typing import Type
import uuid

from src.toolkit.coordinates import Coordinates

class SensorInterface(ABC):
    _sensor_name: str
    _sensor_id: str
    _gather_time: Type[datetime]
    _coordinates: Coordinates
    _socrates: Random

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random):
        self._sensor_name = sensor_name
        self._gather_time = gather_time
        self._coordinates = coordinates
        self._sensor_id = str(uuid.uuid4())
        self._socrates = socrates

    def getId(self) -> str:
        return self._sendor_id

    @abstractmethod
    def simulate(self) -> str:
        pass
