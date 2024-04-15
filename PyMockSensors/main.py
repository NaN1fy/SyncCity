#import unittest
#from test.unit.test_stdout_stream_writer import TestStdoutStreamWriter

from src.stream_writer.stdout_stream_writer import StdoutStreamWriter
from src.sim_toolkit.simulator_controller_factory import SimulatorControllerFactory

if __name__ == '__main__':
    config_file = open("src/assets/config.json", 'r')
    config_str = config_file.read()
    config_file.close()

    simulator_ctrl_factory = SimulatorControllerFactory(
            config_file = config_str,
            stream_writer = StdoutStreamWriter
            )

    simulator_controller = simulator_ctrl_factory.forgeController()
    simulator_controller.run_all()

    #test_loader = unittest.TestLoader()
    #test_suite = test_loader.loadTestsFromTestCase(TestStdoutStreamWriter)

    #test_runner = unittest.TextTestRunner()
    #test_runner.run(test_suite)
