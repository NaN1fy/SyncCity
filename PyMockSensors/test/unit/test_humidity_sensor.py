import json
from datetime import datetime
from unittest.mock import patch
from random import Random

from src.sensor.humidity_sensor import HumiditySensor
from src.toolkit.coordinates import Coordinates

def test_humidity_sensor():
    coordinates = Coordinates(45.406434, 11.879008)
    # 26/04/2024 12:10:00.123456
    simulated_datetime = datetime(2024, 4, 26, 12, 10, 0, 123456)
    simulated_id = "mocked-id"
    with patch.object(Random, 'random', return_value = 0):
        with patch('uuid.uuid4') as mocked_id:
            random_obj = Random()
            with patch('datetime.datetime') as mocked_datetime:
                mocked_datetime.now.return_value = simulated_datetime
                mocked_id.return_value = simulated_id
                sensor_simulator = HumiditySensor("Arcella", mocked_datetime, coordinates, random_obj, 1)
                sensor_simulator._HumiditySensor__sensor_id = simulated_id
                json_data = sensor_simulator.simulate()
                parsed_json = json.loads(json_data)
                print(parsed_json)
                expected_json = {
                    "sensor_type": "humidity",
                    "sensor_name": "Arcella",
                    "sensor_id": "mocked-id",
                    "gather_time": "2024-04-26 12:10:00.123456",
                    "readings": [{"type": "%", "value": 54}],
                    "coordinates": {"type": "point", "coordinates": [45.406434, 11.879008]}
                }
                assert parsed_json == expected_json
