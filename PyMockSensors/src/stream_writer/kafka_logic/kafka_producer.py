from typing import Callable
from confluent_kafka import Producer, KafkaException

from src.stream_writer.kafka_logic.producer_interface import ProducerInterface
from src.toolkit.kafka_constants import KAFKA_HOST, KAFKA_PORT

class KafkaProducer(ProducerInterface):
    __producer: Producer
    __topic: str

    def __init__(self, topic: str):
        config = {
                'bootstrap.servers': KAFKA_HOST + ':' + str(KAFKA_PORT)
                }
        try:
            self.__topic = topic
            self.__producer = Producer(config)
        except KafkaException as e:
            print(f"Error in creating the producer: {e}")

    def produce(self, data: str, callback: Callable) -> None:
        self.__producer.produce(self.__topic, value = data, callback = callback)
        self.__producer.poll(1)
