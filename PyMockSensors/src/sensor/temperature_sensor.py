from src.sensor.sensor_interface import SensorInterface

class TemperatureSensor(SensorInterface):
    """
    Implementation of Temperature sensor

    Attributes:

    Methods:
        simulate(self) -> str: method to simulate the sensor's data gathering.
    """
    def __init__(self, sensor_name: str, gather_time: Type[datetime], coordinates: Coordinates):
        """
        Constructor method for TemperatureSensor class.

        Parameters:
            all the superclass parameters
        """

        super().__init__(sensor_name, gather_time, coordinates)


    def simulate(self) -> str:
        """
        Method to simulate the sensor's data gathering.
        """
        data = "lettura fittizzia\n"
        return data
