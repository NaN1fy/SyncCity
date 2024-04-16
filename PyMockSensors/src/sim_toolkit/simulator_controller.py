import signal
from typing import List

from src.sim_toolkit.simulator_thread import SimulatorThread

class SimulatorController:
    __simulators: List[SimulatorThread] = []

    def __init__(self, simulators: List[SimulatorThread]):
        self.__simulators = simulators
        signal.signal(signal.SIGINT, self.handle_interrupt)

    def start_all(self) -> None:
        for simulator in self.__simulators:
            simulator.start()

    def stop_all(self) -> None:
        for simulator in self.__simulators:
            simulator.stop()

    def handle_interrupt(self, sig, frame):
        self.stop_all()
        print("\nInterrupt detected. Stopping all simulators...")
