import unittest
from unittest.mock import MagicMock
from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_type import SensorType
from src.toolkit.jsonfy import jsonfy

class TestJsonfy(unittest.TestCase):
    def test_jsonfy(self):
        sensor_name = "Arcella"
        sensor_id = "mocked_id"
        sensor_type = SensorType.TEMPERATURE
        gather_time = "2024-04-26 12:10:00.123456"
        coordinates = Coordinates(45.406434, 11.879008)
        readings = [{"type": "Degrees Celsius", "value":  25.85}]
        coordinates.toJson = MagicMock(return_value='{"type": "point", "coordinates": [45.406434, 11.879008]}')
        json_output = jsonfy(sensor_name, sensor_id, sensor_type, gather_time, coordinates, readings)
        expected_json = '{"sensor_type": "temperature", "sensor_name": "Arcella", "sensor_id": "mocked_id", "gather_time": "2024-04-26 12:10:00.123456", "readings": [{"type": "Degrees Celsius", "value": 25.85}], "coordinates": {"type": "point", "coordinates": [45.406434, 11.879008]}}'
        assert json_output == expected_json

if __name__ == '__main__':
    unittest.main()
