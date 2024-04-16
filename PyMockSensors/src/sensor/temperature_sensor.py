from typing import Type
from datetime import datetime

from src.sensor.sensor_interface import SensorInterface

from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_type import SensorType
from src.toolkit.jsonfy import jsonfy

class TemperatureSensor(SensorInterface):
    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates):
        super().__init__(sensor_name, gather_time, coordinates)

    def simulate(self) -> str:
        ## logica della simulazione
        reading = {
            "type": "Unita di misura",
            "value": "lettura falsa"
        }
        return jsonfy(
                    sensor_name = self._sensor_name,
                    sensor_type = SensorType.TEMPERATURE,
                    gather_time = str(self._gather_time.now()),
                    coordinates = self._coordinates,
                    readings = reading
                    )


