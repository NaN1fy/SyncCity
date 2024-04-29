from typing import Dict

from src.stream_writer.stream_writer_interface import StreamWriterInterface
from src.stream_writer.kafka_logic.kafka_producer import KafkaProducer
from src.toolkit.ack import acked


class KafkaStreamWriter(StreamWriterInterface):
    __producer: KafkaProducer
    __topic: str

    def __init__(self, sensory_type):
        self.__topic = sensory_type
        self.__producer = KafkaProducer(sensory_type)

    def accept(self, visitor, sensor, sim_clss, config: Dict):
        visitor.visit(self, sensor, sim_clss, config, self.__topic)

    def write(self, data: str) -> None:
        self.__producer.produce(data, acked)
