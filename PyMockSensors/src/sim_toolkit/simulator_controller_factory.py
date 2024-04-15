import json
from abc import ABC, abstractmethod
from src.sim_toolkit.simulator_controller import SimulatorController
from src.sim_toolkit.simulator_thread import SimulatorThread
from src.toolkit.sensor_type import SensorType
from src.toolkit.sensor_interface import SensorInterface
from src.toolkit.sensor_codex import sensor_codex

class SimulatorControllerFactory(ABC):
    _simulators: List[SimulatorThread] = []
    _config_file: str

    def __init__(self, config_file: str):
        self._config_file = config_file

    @abstractmethod
    def _createSimulator(self, sim_type: SensorType, sim_class: Type[SensorInterface], config: Dict) -> int:
        pass

    def forgeController(self) -> SimulatorController:
        config_fle = json.loads(self._config_file)
        for sensor in config_file:
                class = sensor_codex.get(sensor["type"])
                if class is not None:
                    self._createSimulator(sim_type = config_file["type"], sim_class = class, config = config_file[sensor])
        return SimulatorController(simulators = self.__simulators)
