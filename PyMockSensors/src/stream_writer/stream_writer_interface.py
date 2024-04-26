from abc import ABC, abstractmethod

class StreamWriterInterface(ABC):
    @abstractmethod
    def accept(self, visitor, sensor_type):
        pass

    @abstractmethod
    def write(self, data: str) -> None:
        pass

