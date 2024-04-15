import threading
from time import sleep

from src.sensor.sensor_interface import SensorInterface

from src.stream_writer.stream_writer_interface import StreamWriterInterface

class SimulatorThread(threading.Thread):
    __stop_event: threading.Event
    __temporal_second_delay: int = 1
    __stream_writer: StreamWriterInterface = None
    __sensor: SensorInterface = None

    def __init__(self, temporal_second_delay: int, sensor: SensorInterface, stream_writer: StreamWriterInterface):
        super().__init__()
        self.__temporal_second_delay = temporal_second_delay
        self.__sensor = sensor
        self.__stream_writer = stream_writer
        self.__stop_event = threading.Event()

    def run(self) -> None:
        while not self.__stop_event.is_set():
            self.__stream_writer.write(self.__sensor.simulate())
            sleep(self.__temporal_second_delay)

    def stop(self) -> None:
        self.__stop_event.set()
