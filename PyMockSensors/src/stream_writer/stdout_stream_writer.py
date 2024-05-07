from typing import Dict

from src.stream_writer.stream_writer_interface import StreamWriterInterface

class StdoutStreamWriter(StreamWriterInterface):
    def __init__(self, _):
        pass

    def accept(self, visitor, sensor, sim_clss, config: Dict):
        visitor.visit(self, sensor, sim_clss, config, None)

    def write(self, data: str) -> None:
        print(data + '\n')

