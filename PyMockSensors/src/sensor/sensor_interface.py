import uuid

from abc import ABC, abstractmethod
from datetime import datetime
from random import Random
from typing import Type

from src.toolkit.coordinates import Coordinates


class SensorInterface(ABC):
    _sensor_name: str
    _sensor_id: str
    _gather_time: Type[datetime]
    _coordinates: Coordinates
    _socrates: Random
    _temporal_second_delay: int = 1

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        self._sensor_name = sensor_name
        self._gather_time = gather_time
        self._coordinates = coordinates
        self._sensor_id = str(uuid.uuid4())
        self._socrates = socrates
        self._temporal_second_delay = temporal_second_delay

    def getId(self) -> str:
        return self._sensor_id

    @abstractmethod
    def simulate(self) -> str:
        pass

    @abstractmethod
    def _send_signal(self) -> None:
        pass

    @abstractmethod
    def getType(self) -> str:
        pass
