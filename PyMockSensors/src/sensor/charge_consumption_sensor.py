from datetime import datetime, timedelta
from random import Random
from time import sleep
from typing import Type

from src.toolkit.constants import signal_list, signal_lock, SEC_IN_HOUR
from src.toolkit.coordinates import Coordinates
from src.sensor.sensor_interface import SensorInterface

from src.toolkit.sensor_type import SensorType

from src.toolkit.jsonfy import jsonfy

class ChargeConsumptionSensor(SensorInterface):


    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates, socrates: Random, temporal_second_delay: int):
        super().__init__(sensor_name, gather_time, coordinates, socrates, temporal_second_delay)
        self.__in_use = False
        self.__time_to_complete_charge = None
        self.__time_to_stop_charge = None

        if self._socrates.random() <= 0.5:
            self.__next_connection = self._gather_time.now()
        else:
            self.__next_connection = self._gather_time.now() + \
                timedelta(seconds=self._socrates.randint(1800, 7000))

    def getType(self) -> str:
        return SensorType.CHARGE_CONSUMPTION

    def _send_signal(self) -> None:
        sleep(self._temporal_second_delay)
        with signal_lock[SensorType.CHARGE_CONSUMPTION]:
            signal_list[SensorType.CHARGE_CONSUMPTION].append(self._sensor_id)

    def __connect_car(self):
        self.__mean_erogation_power = self._socrates.uniform(20, 80)

        random_duration = self._socrates.randint(3600, 2 * 3600)
        self.__time_to_complete_charge = self._gather_time.now() + \
            timedelta(seconds=random_duration)

        random_duration = self._socrates.randint(-1800, 2 * 3600)
        self.__time_to_stop_charge = self.__time_to_complete_charge + \
            timedelta(seconds=random_duration)
        self.__in_use = True

    def __check_new_car(self):
        if self.__next_connection is None or self._gather_time.now() >= self.__next_connection:
            self.__connect_car()

    def __remove_car_from_charging(self):
        if self._gather_time.now() >= self.__time_to_stop_charge:
            self.__next_connection = self._gather_time.now() + \
                timedelta(
                    seconds=self._socrates.randint(1800, 7000))
            self.__in_use = False


    def __get_erogation(self) -> int:
        if not self.__in_use:
            return 0  
        if self._gather_time.now() < self.__time_to_complete_charge:
            current_time = self._gather_time.now()
            completion_time = self.__time_to_complete_charge
            time_difference = current_time - completion_time
            time_difference_seconds = time_difference.total_seconds()

            erogation = self.__mean_erogation_power + \
                self._socrates.uniform(-0.05, 0.05) - \
                (self.__mean_erogation_power * 0.1) * \
                time_difference_seconds / (2*3600)
        else:
            erogation = 0.1 + self._socrates.uniform(-0.05, 0.05)
        return erogation

    def simulate(self) -> str:
        if not self.__in_use:
            self.__check_new_car()
        else:
            self.__remove_car_from_charging()

        reading = {
            "type": "kW/h",
            "value": "{0:.2f}".format(self.__get_erogation())
        }

        return jsonfy(
            sensor_name=self._sensor_name,
            sensor_id=self._sensor_id,
            sensor_type=SensorType.CHARGE_CONSUMPTION,
            gather_time=str(self._gather_time.now()),
            coordinates=self._coordinates,
            readings=[reading]
        )
