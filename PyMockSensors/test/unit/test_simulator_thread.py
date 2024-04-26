import unittest
from unittest.mock import patch
from typing import Dict

from src.sim_toolkit.simulator_thread import SimulatorThread
from src.sensor.sensor_interface import SensorInterface
from src.stream_writer.stream_writer_interface import StreamWriterInterface

class MockSensor(SensorInterface):
    def simulate(self):
        return "Mock simulated value"

class MockStreamWriter(StreamWriterInterface):
    def accept(self):
        pass

    def write(self, data):
        pass

class TestSimulatorThread(unittest.TestCase):
    __mock_sensor: MockSensor
    __mock_stream_writer: MockStreamWriter
    __sim_thread: SimulatorThread

    def test_run_method(self):
        self.__mock_sensor = MockSensor(None, None, None, None)
        self.__mock_stream_writer = MockStreamWriter()
        self.__sim_thread = SimulatorThread(temporal_second_delay = 1, sensor = self.__mock_sensor, stream_writer = self.__mock_stream_writer)
        with patch.object(self.__mock_sensor, 'simulate') as self.__mock_sensor:
            with patch.object(self.__mock_stream_writer, 'write') as self.__mock_stream_writer:
                self.__sim_thread.start()
                self.__sim_thread.join(timeout = 3)
                self.__mock_sensor.assert_called()
                self.__mock_stream_writer.assert_called()

        self.__sim_thread.stop()
