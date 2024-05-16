import unittest
from unittest.mock import MagicMock
from src.toolkit.coordinates import Coordinates

class TestCoordinates(unittest.TestCase):
    def test_setCoordinates(self):
        mocked_coordinates = Coordinates(0.0, 0.0)
        mocked_coordinates.setCoordinates(45.406434, 11.879008)
        assert mocked_coordinates.get_longitude() == 45.406434
        assert mocked_coordinates.get_latitude() == 11.879008

    def test_toJson(self):
        mocked_coordinates = Coordinates(45.406434, 11.879008)
        parsed_json = mocked_coordinates.toJson()  
        expected_json = '{"type": "point", "coordinates": [45.406434, 11.879008]}'
        assert parsed_json == expected_json

if __name__ == '__main__':
    unittest.main()