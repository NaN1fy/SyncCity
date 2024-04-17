import json
from datetime import datetime
from random import Random
from typing import Dict, List, Type

from src.sensor.sensor_interface import SensorInterface

from src.sim_toolkit.simulator_controller import SimulatorController
from src.sim_toolkit.simulator_thread import SimulatorThread

from src.toolkit.sensor_type import SensorType

from src.stream_writer.stdout_stream_writer import StreamWriterInterface

from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_codex import sensor_codex

class DuplicateSensorNameError(Exception):
    pass

class SimulatorControllerFactory():
    __simulators: List[SimulatorThread] = []
    __config_file: str
    __stream_writer: Type[StreamWriterInterface]
    __simulators_inventory: Dict[str, int] = {}

    def __init__(self, config_file: str, stream_writer: Type[StreamWriterInterface]):
        self.__config_file = config_file
        self.__stream_writer = stream_writer

    def _createSimulator(self, sensor_type: SensorType, sim_clss: Type[SensorInterface], wrt_clss: Type[StreamWriterInterface], config: Dict) -> int:
        sensor_idx = sensor_type
        if "name" in config:
            if "name" in self.__simulators_inventory:
                raise DuplicateSensorNameError("Cannot set the same name for two different sensors.")
            sensor_idx = str(config["name"])
        else:
            self.__simulators_inventory[sensor_type] = self.__simulators_inventory.get(sensor_type, 0) + 1
            sensor_idx += str(self.__simulators_inventory[sensor_type])
        self.__simulators.append(
                SimulatorThread(
                        temporal_second_delay = config["temporal_second_delay"],
                        sensor = sim_clss(
                            sensor_name = sensor_idx,
                            gather_time = datetime,
                            coordinates = Coordinates(
                                longitude=config["coordinates"]["values"][0],
                                latitude=config["coordinates"]["values"][1]
                                ),
                            socrates = Random()
                            ),
                        stream_writer = wrt_clss()
                    )
                )

    def forgeController(self) -> SimulatorController:
        config_file = json.loads(self.__config_file)
        for sensor in config_file:
                sim_class = sensor_codex.get(sensor["type"])
                if sim_class is not None:
                    self._createSimulator(sensor_type = sensor["type"], sim_clss = sim_class, wrt_clss = self.__stream_writer, config = sensor)
        return SimulatorController(simulators = self.__simulators)
