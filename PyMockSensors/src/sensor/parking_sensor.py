from dataclasses import dataclass
from datetime import datetime, timedelta
import json
import numpy as np
from random import Random
from random import randint
import re
import string
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
    __expected_affluence_per_minute: int
    
    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random):
        super().__init__(sensor_name, gather_time, coordinates, socrates)
        self.__price_per_hour = round(self._socrates.uniform(1.0, 1.5), 1)
        self.__parking_dataset = np.array([{'is_available': True, 'timestamp': None, 'lay_off': None, 'plate': None, 'bill': None} for _ in range(self.__num_parking_spots)], dtype = object)
        self.__morning_peak = GaussianPeak(8 * 60, 300, 40)
        self.__noon_peak = GaussianPeak(12 * 60, 120, 30)
        self.__evening_peak = GaussianPeak(16 * 60, 400, 10)
        self.__expected_affluence_per_minute = self.__generate_peak()

    def __generate_peak(self) -> np.array:
        minutes = np.arange(MIN_IN_DAY)
        morning_peak_values: list = (self.__morning_peak.weight * np.exp(-((minutes - self.__morning_peak.position_in_minutes) / self.__morning_peak.standard_deviation_in_minutes) ** 2))
        noon_peak_values: list = (self.__noon_peak.weight * np.exp(-((minutes - self.__noon_peak.position_in_minutes) / self.__noon_peak.standard_deviation_in_minutes) ** 2))
        evening_peak_values: list = (self.__evening_peak.weight * np.exp(-((minutes - self.__evening_peak.position_in_minutes) / self.__evening_peak.standard_deviation_in_minutes) ** 2))
        
        morning_peak_values = [0 if x < 0 else round(x) for x in morning_peak_values]
        noon_peak_values = [0 if x < 0 else round(x) for x in noon_peak_values]
        evening_peak_values = [0 if x < 0 else round(x) for x in evening_peak_values]
        return morning_peak_values + noon_peak_values + evening_peak_values

    def __generate_plate(self) -> str:
        pattern = re.compile(r"^[A-Z]{2}[\d]{3}[A-Z]{2}$")
        while True:
            group1 = ''.join(self._socrates.choices(string.ascii_uppercase, k=2))
            group2 = ''.join(self._socrates.choices(string.digits, k=3))
            group3 = ''.join(self._socrates.choices(string.ascii_uppercase, k=2))
            plate = f"{group1}{group2}{group3}"
            if pattern.match(plate):
                return plate

    def simulate(self) -> str:
        now = self._gather_time.now()
        hour = now.strftime("%H")
        min = now.strftime("%M")
        minutes_since_midnight = int(min) + int(hour) * 60

        cars_in_spots = sum(1 for car in self.__parking_dataset if car['is_available'] == False)
        affluence_variance = self.__expected_affluence_per_minute[minutes_since_midnight] - cars_in_spots
        spots_to_add = 0 if affluence_variance < 0 else self._socrates.randint(0, affluence_variance)

        #car leaving
        for idx in range(len(self.__parking_dataset) - 1, -1, -1):
            if self.__parking_dataset[idx]['is_available'] == False:
                if now > self.__parking_dataset[idx]['timestamp'] + timedelta(minutes = self.__parking_dataset[idx]['lay_off']):
                    self.__parking_dataset[idx]['is_available'] = True
                    self.__parking_dataset[idx]['timestamp'] = None
                    self.__parking_dataset[idx]['lay_off'] = None
                    self.__parking_dataset[idx]['plate'] = None
                    self.__parking_dataset[idx]['bill'] = None

        available_dataset = [idx for idx, spot in enumerate(self.__parking_dataset) if spot['is_available'] == True]

        #car parking
        if cars_in_spots < self.__num_parking_spots:
            for _ in range(spots_to_add):
                if cars_in_spots == self.__num_parking_spots:
                    break

                available_idx = self._socrates.randint(0, len(available_dataset) - 1)
                idx = available_dataset[available_idx]
                self.__parking_dataset[idx]['is_available'] = False
                self.__parking_dataset[idx]['timestamp'] = now
                self.__parking_dataset[idx]['lay_off'] = self._socrates.randint(20,240)
                self.__parking_dataset[idx]['plate'] = self.__generate_plate()
                self.__parking_dataset[idx]['bill'] = round(self.__price_per_hour * self.__parking_dataset[idx]['lay_off'] / 60.00, 2)
            
                np.delete(available_dataset, available_idx)

        # print(f"CARS_IN_SPOTS: {cars_in_spots}")
        # print(f"AFFLUENZA: {affluence_variance}")
        # print(f"SPOTS_TO_ADD: {spots_to_add}")
        # print(f"AVAILABLE DATASET: {available_dataset}") 
        # print(f"DATASET: \n {self.__parking_dataset}")

        # print(f"TIMESTAMP: {self.__expected_affluence_per_minute[minutes_since_midnight]}")
        # print(self.__expected_affluence_per_minute)

        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.PARKING,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings=json.dumps([str(slot) for slot in self.__parking_dataset])
        )