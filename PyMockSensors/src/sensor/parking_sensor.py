from dataclasses import dataclass
from datetime import datetime
import numpy as np
from random import Random
from random import randint
from typing import Dict, Type

from src.toolkit.constants import MIN_IN_DAY
from src.toolkit.coordinates import Coordinates
from src.sensor.sensor_interface import SensorInterface

from src.toolkit.sensor_type import SensorType

from src.toolkit.jsonfy import jsonfy

@dataclass
class GaussianPeak:
    position_in_minutes: int
    standard_deviation_in_minutes: int
    weight: float

class ParkingSensor(SensorInterface):
    __num_parking_spots = 100
    __price_per_hour: float
    __parking_dataset: np.ndarray[Dict]
    __morning_peak: GaussianPeak
    __noon_peak: GaussianPeak
    __evening_peak: GaussianPeak
    __people_waiting_per_minute: int
    
    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random):
        super().__init__(sensor_name, gather_time, coordinates, socrates)
        self.__price_per_hour = round(self._socrates.uniform(1.0, 1.5), 1)
        self.__parking_dataset = np.array([{"is_available": True, "timestamp": None, "lay_off": None, "plate": None} for _ in range(self.__num_parking_spots)], dtype = object)
        self.__morning_peak = GaussianPeak(8 * 60, 300, 40)
        self.__noon_peak = GaussianPeak(12 * 60, 120, 30)
        self.__evening_peak = GaussianPeak(16 * 60, 400, 10)
        self.__people_waiting_per_minute = self.__generate_peak()

    def __generate_peak(self) -> np.array:
        minutes = np.arange(MIN_IN_DAY)
        morning_peak_values: list = (self.__morning_peak.weight * np.exp(-((minutes - self.__morning_peak.position_in_minutes) / self.__morning_peak.standard_deviation_in_minutes) ** 2))
        noon_peak_values: list = (self.__noon_peak.weight * np.exp(-((minutes - self.__noon_peak.position_in_minutes) / self.__noon_peak.standard_deviation_in_minutes) ** 2))
        evening_peak_values: list = (self.__evening_peak.weight * np.exp(-((minutes - self.__evening_peak.position_in_minutes) / self.__evening_peak.standard_deviation_in_minutes) ** 2))
        
        morning_peak_values = [0 if x < 0 else round(x) for x in morning_peak_values]
        noon_peak_values = [0 if x < 0 else round(x) for x in noon_peak_values]
        evening_peak_values = [0 if x < 0 else round(x) for x in evening_peak_values]
        return morning_peak_values + noon_peak_values + evening_peak_values
        # / np.max(peak_values) * self.__num_parking_spots

    def simulate(self) -> str:
        now = self._gather_time.now()
        hour = now.strftime("%H")
        min = now.strftime("%M")

        minutes_since_midnight = int(min) + int(hour) * 60

        reading = {
            "type": "Number",
            "value": round(self.__people_waiting_per_minute[minutes_since_midnight])
        }

        print(self.__people_waiting_per_minute)

        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.PARKING,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings=[reading]
        )