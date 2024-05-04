from abc import ABC, abstractmethod
from typing import Callable

class ProducerInterface(ABC):
    @abstractmethod
    def produce(self, data: str, callback: Callable) -> None:
        pass
