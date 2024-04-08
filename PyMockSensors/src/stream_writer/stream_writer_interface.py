from abc import ABC, abstractmethod


class StreamWriterInterface(ABC):
    """
    Interface for stream writers.

    Attributes:
        None

    Methods:
        write(data: str) -> None: Abstract method to write data to a stream.
    """

    @abstractmethod
    def write(self, data: str) -> None:
        """
        Write data to a stream.

        Args:
            data (str): The data to be written to the stream.

        Returns:
            None
        """
        pass

