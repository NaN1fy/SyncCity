from typing import Dict, Type
import unittest
from unittest.mock import patch

from src.sim_toolkit.simulator_controller import SimulatorController
from src.sim_toolkit.simulator_controller_factory import SimulatorControllerFactory
from src.stream_writer.stream_writer_interface import StreamWriterInterface

class MockStreamWriter(StreamWriterInterface):
    def __init__(self, sensor_type):
        pass

    def accept(self, visitor, sensor, sim_clss, config: Dict):
        pass

    def write(self, data):
        pass


class TestStdoutSimulatorExecutorFactory(unittest.TestCase):
    __config : str
    __factory : SimulatorControllerFactory
    __exec_factory : SimulatorController
    __stream_writer: Type[MockStreamWriter]

    def test_creation(self):
        self.__config = '''
                [
          {
            "type": "temperature",
            "name": "Padova, via Luzzatti 3",
            "temporal_second_delay": 0.2,
            "coordinates": {
              "type": "geolocalization",
              "values": [
                45.408569,
                11.887278
              ]
            }
          },
          {
            "type": "temperature",
            "temporal_second_delay": 0.5,
            "coordinates": {
              "type": "geolocalization",
              "values": [
                45.406434,
                11.879008
              ]
            }
          },
          {
            "type": "temperature",
            "name": "Padova, Prato della Valle",
            "temporal_second_delay": 0.8,
            "coordinates": {
              "type": "geolocalization",
              "values": [
                45.406791,
                11.876173
              ]
            }
          },
          {
            "type": "temperature",
            "temporal_second_delay": 1.0,
            "coordinates": {
              "type": "geolocalization",
              "values": [
                45.406778,
                11.882983
              ]
            }
          }
        ]
        '''
        with patch('src.stream_writer.stdout_stream_writer.StdoutStreamWriter', MockStreamWriter):
            self.__stream_writer = MockStreamWriter
            self.__config = self.__config.strip()
            self.__factory = SimulatorControllerFactory(config_file = self.__config, stream_writer = self.__stream_writer)
            self.__exec_factory = self.__factory.forgeController()
            assert isinstance(self.__exec_factory, SimulatorController)

        with patch('src.stream_writer.kafka_stream_writer.KafkaStreamWriter', MockStreamWriter):
            self.__stream_writer = MockStreamWriter
            self.__config = self.__config.strip()
            self.__factory = SimulatorControllerFactory(config_file = self.__config, stream_writer = self.__stream_writer)
            self.__exec_factory = self.__factory.forgeController()
            assert isinstance(self.__exec_factory, SimulatorController)

