import json
from typing import Dict, Type
from datetime import datetime
#from abc import ABC, abstractmethod
from src.sim_toolkit.simulator_controller import SimulatorController
from src.sim_toolkit.simulator_thread import SimulatorThread
from src.toolkit.sensor_type import SensorType
from src.toolkit.sensor_interface import SensorInterface
from src.toolkit.sensor_codex import sensor_codex
from src.stream_writer.stdout_stream_writer import StreamWriterInterface


class DuplicateSensorNameError(Exception):
    pass

class SimulatorControllerFactory():
    __simulators: List[SimulatorThread] = []
    __config_file: str
    __stream_writer: Type[StreamWriterInterface]
    __simulators_inventory = Dict[str, int] = {}

    def __init__(self, config_file: str, stream_writer: Type[StreamWriterInterface]):
        self.__config_file = config_file
        self.__stream_writer = stream_writer

    #@abstractmethod
    def _createSimulator(self, tpe: SensorType, sim_clss: Type[SensorInterface], wrt_clss = Type[StreamWriterInterface], config: Dict) -> int:
        sensor_idx = tpe.value
        if "name" in config:
            if "name" in __simulators_inventory:
                raise DuplicateSensorNameError("Cannot set the same name for two different sensors.")
            sensor_idx = str(config["name"])
        else:
            self.__simulators_inventory[tpe.value] = self.__simulators_inventory.get(tpe.value, 0) + 1;
            sensor_idx += str(self.__simulators_inventory[tpe.value])
        self.__simulators.append(
                SimulatorController(
                        config["temporal_second_delay"],
                        sim_clss(
                            _sensor_name = sensor_idx
                            _gather_time = datetime
                            _coordinates = Coordinates(
                                longitude=config["coordinates"]["values"][0],
                                latitude=config["coordinates"]["values"][1]
                                )
                            ),
                        wrt_clss()
                    )
                )

    def forgeController(self) -> SimulatorController:
        config_fle = json.loads(self.__config_file)
        for sensor in config_file:
                sensor_class = sensor_codex.get(sensor["type"])
                if sensor_class is not None:
                    self._createSimulator(tpe = config_file["type"], sim_clss = sensor_class, wrt_clss = self.__stream_writer , config = config_file[sensor])
        return SimulatorController(simulators = self.__simulators)
