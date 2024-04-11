from abc import ABC, abstractmethod
from datetime import datetime
from typing import Type
from src.toolkit.coordinates import Coordinates

class SensorInterface(ABC):
    """
    Interface for sensors

    Attributes:
        _sensor_name: Name of the sensor.
        _gather_time: Date of the last data collection.
        _coordinates: Coordinates of the sensor location (see Coordinates class in ./src/toolkit/coordinates.py).

    Methods:
        simulate(self) -> str: Abstract method to simulate the sensor's data gathering.
    """

    _sensor_name: str
    _gather_time: Type[datetime]
    _coordinates: Coordinates

    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates):
        """
        Constructor method for SensorInterface class.

        Parameters:
            sensor_name (str): Name of the sensor.
            gather_time (Type[datetime]): Date of the last data collection.
            coordinates (Coordinates): Coordinates of the sensor location.
        """

        self._sensor_name = sensor_name
        self._gather_time = gather_time
        self._coordinates = coordinates

    @abstractmethod
    def simulate(self) -> str:
        """
        Abstract method to simulate the sensor's data gathering.
        """

        pass

