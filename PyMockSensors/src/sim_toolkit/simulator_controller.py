from typing import List
from src.sim_toolkit.simulator_thread import SimulatorThread

class SimulatorController:
    """
    Controller apt to run and stop each thread

    Attributes:
        __simulators: List of all the threads currently created.

    Methods:
        __init__(self, simulators: List[SimulatorThread]): Constructor method for SimulatorController class.
        start_all(self) -> None: Starts each thread.
        stop_all(self) -> None: Terminates all threads.
    """

    __simulators: List[SimulatorThread] = []

    def __init__(self, simulators: List[SimulatorThread]):
        """
        Constructor method for SimulatorController class.

        Parameters:
            simulators (List[SimulatorThread]): List of SimulatorThread objects.
        """

        self.__simulators = simulators

    def start_all(self) -> None:
        """
        Starts each thread.
        """

        for simulator in self.__simulators:
            simulator.start()

    def stop_all(self) -> None:
        """
        Terminates all threads.
        """

        for simulator in self.__simulators:
            simulator.stop()

