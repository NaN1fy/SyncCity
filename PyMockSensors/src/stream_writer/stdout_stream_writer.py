from src.stream_writer.stream_writer_interface import StreamWriterInterface


class StdoutStreamWriter(StreamWriterInterface):
    """
    Implementation of StreamWriterInterface for writing to standard output (stdout).

    Attributes:
        None

    Methods:
        write(data: str) -> None: Write data to standard output.
    """

    def write(self, data: str) -> None:
        """
        Write data to standard output.

        Args:
            data (str): The data to be written to standard output.

        Returns:
            None
        """
        print(data + '\n')

