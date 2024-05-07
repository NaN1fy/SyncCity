import json
from typing import List, Dict

from src.toolkit.constants import INDENT_JSON
from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_type import SensorType

def jsonfy(sensor_name: str, sensor_id: str, sensor_type: SensorType, gather_time: str, coordinates: Coordinates, readings: List[Dict]):
    return json.dumps({
        "sensor_type": sensor_type.value,
        "sensor_name": sensor_name,
        "sensor_id" : sensor_id,
        "gather_time": gather_time,
        "readings": readings,
        "coordinates": json.loads(coordinates.toJson())
        },
        indent=4 if INDENT_JSON else None
        )

