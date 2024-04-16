from abc import ABC, abstractmethod

class StreamWriterInterface(ABC):
    @abstractmethod
    def write(self, data: str) -> None:
        pass

