import json

class Coordinates:
  __longitude: float
  __latitude: float

  def __init__(self, longitude: float, latitude: float):
    self.__longitude = longitude
    self.__latitude = latitude

  def setCoordinates(self, longitude: float, latitude: float) -> None:
    self.__longitude = longitude
    self.__latitude = latitude

  def toJson(self) -> str:
    return json.dumps(
            {
                "type": "point",
                "coordinates": [
                    self.__longitude,
                    self.__latitude
                    ]
                }
            )
