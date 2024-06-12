from src.toolkit.constants import STDOUT
from src.toolkit.constants import KAFKAOUT

from src.sim_toolkit.simulator_controller_factory import SimulatorControllerFactory


def main():
    config_file = open("assets/config.json", 'r')
    config = config_file.read()
    config_file.close()
    ''' 
    simulator_ctrl_factory = SimulatorControllerFactory(
        config_file = config,
        stream_writer = STDOUT
    )
    '''
    simulator_ctrl_factory = SimulatorControllerFactory(
        config_file=config,
        stream_writer=KAFKAOUT
    )
    # '''
    simulator_controller = simulator_ctrl_factory.forgeController()
    simulator_controller.start_all()


if __name__ == '__main__':
    main()
