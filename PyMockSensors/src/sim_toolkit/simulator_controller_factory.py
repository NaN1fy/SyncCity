import json
from datetime import datetime
from random import Random
from typing import Dict, List, Type

from src.sensor.sensor_interface import SensorInterface

from src.sim_toolkit.simulator_controller import SimulatorController
from src.sim_toolkit.simulator_thread import SimulatorThread

from src.toolkit.sensor_type import SensorType

from src.stream_writer.stdout_stream_writer import StreamWriterInterface
from src.stream_writer.stdout_stream_writer import StdoutStreamWriter
from src.stream_writer.kafka_stream_writer import KafkaStreamWriter

from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_codex import sensor_codex

class DuplicateSensorNameError(Exception):
    pass

class SimulatorControllerFactory():
    __simulators: List[SimulatorThread] = []
    __config_file: str
    __stream_writer: Type[StreamWriterInterface]
    __simulators_inventory: Dict[str, int] = {}
    __writers_kafka_inventory: Dict[str, KafkaStreamWriter] = {}

    def __init__(self, config_file: str, stream_writer: Type[StreamWriterInterface]):
        self.__config_file = config_file
        self.__stream_writer = stream_writer

    def _createSimulator(self, sensor_type: SensorType, sim_clss: Type[SensorInterface], wrt_clss: Type[StreamWriterInterface], config: Dict) -> int:
        sensor = sensor_type
        if "name" in config:
            if "name" in self.__simulators_inventory:
                raise DuplicateSensorNameError("Cannot set the same name for two different sensors.")
            sensor = str(config["name"])
            self.__simulators_inventory[sensor] = 1
        else:
            self.__simulators_inventory[sensor_type] = self.__simulators_inventory.get(sensor_type, 0) + 1
            sensor += str(self.__simulators_inventory[sensor_type])
        wrt_clss(sensor_type).accept(self, sensor, sim_clss, config)

    def visit(self, writer: StdoutStreamWriter, sensor, sim_clss, config: Dict, sensor_type: str):
        delay = 0
        if "temporal_second_delay" in config:
            delay = config["temporal_second_delay"]
        self.__simulators.append(
                SimulatorThread(
                        sensor = sim_clss(
                            sensor_name = sensor,
                            gather_time = datetime,
                            coordinates = Coordinates(
                                longitude=config["coordinates"]["values"][0],
                                latitude=config["coordinates"]["values"][1]
                                ),
                            socrates = Random(),
                            temporal_second_delay = delay
                            ),
                        stream_writer = writer
                    )
                )

    def visit(self, writer: KafkaStreamWriter, sensor, sim_clss, config: Dict, sensor_type: str):
        if sensor_type not in self.__writers_kafka_inventory:
            self.__writers_kafka_inventory[sensor_type] = writer
        delay = 0
        if "temporal_second_delay" in config:
            delay = config["temporal_second_delay"]
        self.__simulators.append(
                SimulatorThread(
                        sensor = sim_clss(
                            sensor_name = sensor,
                            gather_time = datetime,
                            coordinates = Coordinates(
                                longitude=config["coordinates"]["values"][0],
                                latitude=config["coordinates"]["values"][1]
                                ),
                            socrates = Random(),
                            temporal_second_delay = delay
                            ),
                        stream_writer = self.__writers_kafka_inventory[sensor_type]
                    )
                )


    def forgeController(self) -> SimulatorController:
        config_file = json.loads(self.__config_file)
        for sensor in config_file:
                sim_class = sensor_codex.get(sensor["type"])
                if sim_class is not None:
                    self._createSimulator(sensor_type = sensor["type"], sim_clss = sim_class, wrt_clss = self.__stream_writer, config = sensor)
        return SimulatorController(simulators = self.__simulators)
