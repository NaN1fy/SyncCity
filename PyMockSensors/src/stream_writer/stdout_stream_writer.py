from src.stream_writer.stream_writer_interface import StreamWriterInterface

class StdoutStreamWriter(StreamWriterInterface):
    def write(self, data: str) -> None:
        print(data + '\n')

