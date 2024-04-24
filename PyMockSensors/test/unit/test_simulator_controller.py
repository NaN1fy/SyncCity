import unittest
from unittest.mock import MagicMock

from src.sim_toolkit.simulator_thread import SimulatorThread
from src.sim_toolkit.simulator_controller import SimulatorController

class TestSimulatorController(unittest.TestCase):
    __simulators: None
    __controller: None

    def setUp(self):
        self.__simulators = [MagicMock(spec = SimulatorThread), MagicMock(spec = SimulatorThread), MagicMock(spec = SimulatorThread), MagicMock(spec = SimulatorThread)]
        self.__controller = SimulatorController(self.__simulators)

    def test_start_all(self):
        self.__controller.start_all()
        for simulator in self.__simulators:
            simulator.start.assert_called_once()

    def test_stop_all(self):
        self.__controller.stop_all()
        for simulator in self.__simulators:
            simulator.stop.assert_called_once()
