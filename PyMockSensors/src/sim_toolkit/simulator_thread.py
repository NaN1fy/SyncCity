import threading
from time import sleep
from src.sensor.sensor_interface import SensorInterface
from src.stream_writer.stream_writer_interface import StreamWriterInterface

class SimulatorThread(threading.Thread):
    """
    Container apt to run and manage each Sensor with the corresponding stream output

    Attributes:
        is_running: shows the state of the simulation
        __temporal_second_delay: seconds between each refresh
        __stream_writer: see StreamWriterInterface class (./src/stream_writer/stream_writer_interface.py)
        __sensor: see Sensor class (./src/sensor/sensor_interface.py)

    Methods:
        __init__(self, is_running: bool, temporal_second_delay: int, stream_writer: StreamWriterInterface, sensor: SensorInterface):
            Constructor method for SimulatorThread class.
        
        start(self) -> None:
            Starts the simulation loop.
        
        stop(self) -> None:
            Stops the simulation loop.
    """

    is_running: bool = True
    __temporal_second_delay: int = 1
    __stream_writer: StreamWriterInterface = None
    __sensor: SensorInterface = None

    def __init__(self, is_running: bool, temporal_second_delay: int, stream_writer: StreamWriterInterface, sensor: SensorInterface):
        """
        Constructor method for SimulatorThread class.

        Parameters:
            is_running (bool): Initial state of the simulation.
            temporal_second_delay (int): Delay in seconds between each refresh.
            stream_writer (StreamWriterInterface): StreamWriter object for writing the simulated data.
            sensor (SensorInterface): Sensor object for data simulation.
        """

        super().__init__()
        self.is_running = is_running
        self.__temporal_second_delay = temporal_second_delay
        self.__stream_writer = stream_writer
        self.__sensor = sensor

    def start(self) -> None:
        """
        Starts the simulation loop.
        """

        while self.is_running:
            self.__stream_writer.write(self.__sensor.simulate())
            sleep(self.__temporal_second_delay)

    def stop(self) -> None:
        """
        Stops the simulation loop.
        """

        self.is_running = False

