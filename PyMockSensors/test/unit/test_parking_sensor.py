import json
from datetime import datetime
from unittest.mock import patch
from random import Random

from src.sensor.parking_sensor import ParkingSensor
from src.toolkit.coordinates import Coordinates

def test_parking_sensor():
    coordinates = Coordinates(45.406434, 11.879008)
    # 26/04/2024 12:10:00.123456
    simulated_datetime = datetime(2024, 4, 26, 12, 10, 0, 123456)
    simulated_id = "mocked-id"
    with patch.object(Random, 'random', return_value = 0):
        with patch('uuid.uuid4') as mocked_id:
            random_obj = Random()
            with patch('datetime.datetime') as mocked_datetime:
                with patch.object(ParkingSensor, '_ParkingSensor__generate_plate', return_value="AA000AA"):
                    with patch.object(Random, 'randint', return_value = 1):
                        mocked_datetime.now.return_value = simulated_datetime
                        mocked_id.return_value = simulated_id
                        sensor_simulator = ParkingSensor("Arcella", mocked_datetime, coordinates, random_obj, 0)
                        sensor_simulator._ParkingSensor__sensor_id = simulated_id
                        json_data = sensor_simulator.simulate()
                        parsed_json = json.loads(json_data)

                        expected_json = {
                            "sensor_type": "parking",
                            "sensor_name": "Arcella",
                            "sensor_id": "mocked-id",
                            "gather_time": "2024-04-26 12:10:00.123456",
                            "readings": [{"is_available": False, "lay_off": 1, "plate": "AA000AA"}],
                            "coordinates": {"type": "point", "coordinates": [45.406434, 11.879008]}
                        }
                        assert parsed_json == expected_json
