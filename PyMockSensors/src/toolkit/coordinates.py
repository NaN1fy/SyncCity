class Coordinates:
  """
    Class that represents some of the attributes for sensors: in particular, a
    tuple of floats that pinpoints the exact spatial location of the data collection

    Attributes:
        longitude: represents the longitude of the geolocalized point
        latitude: represents the latitude of the geolocalized point

    Methods:
        __init__(self, longitude: float, latitude: float) -> None: Constructor method
            Initializes a Coordinates object with given longitude and latitude values.

        setCoordinates(self, longitude: float, latitude: float) -> None: Setter method
            Sets the longitude and latitude attributes of the Coordinates object.

  """

  __longitude: float
  __latitude: float

  def __init__(self, longitude: float, latitude: float):
    """
    Constructor method for Coordinates class.

    Parameters:
        longitude (float): The longitude of the geolocalized point.
        latitude (float): The latitude of the geolocalized point.
    """

    self.__longitude = longitude
    self.__latitude = latitude

  def setCoordinates(self, longitude: float, latitude: float) -> None:
    """
    Setter method for Coordinates class.

    Parameters:
        longitude (float): The longitude of the geolocalized point.
        latitude (float): The latitude of the geolocalized point.
    """

    self.__longitude = longitude
    self.__latitude = latitude
