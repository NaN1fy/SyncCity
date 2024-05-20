import numpy as np
import threading

from src.sensor.sensor_interface import SensorInterface
from src.stream_writer.stream_writer_interface import StreamWriterInterface
from src.toolkit.constants import signal_list, signal_lock


class SimulatorThread(threading.Thread):
    __stop_event: threading.Event
    __stream_writer: StreamWriterInterface = None
    __sensor: SensorInterface = None

    def __init__(self, sensor: SensorInterface, stream_writer: StreamWriterInterface):
        super().__init__()
        self.__sensor = sensor
        self.__stream_writer = stream_writer
        self.__stop_event = threading.Event()
    
    def __handle_signal(self):
        self.__stream_writer.write(self.__sensor.simulate())

    def run(self) -> None:
        while not self.__stop_event.is_set():
            self.__sensor._send_signal()
            with signal_lock[self.__sensor.getType()]:
                signals = signal_list[self.__sensor.getType()]
                idx = np.where(signals == self.__sensor.getId())
                if idx:
                    self.__handle_signal()
                    signals = np.delete(signals, idx)
            print(signal_list[self.__sensor.getType()])

    def stop(self) -> None:
        self.__stop_event.set()