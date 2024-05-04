import unittest
from unittest.mock import MagicMock

from src.stream_writer.kafka_stream_writer import KafkaStreamWriter
from src.stream_writer.kafka_logic.kafka_producer import KafkaProducer
from src.toolkit.ack import acked


class TestKafkaStreamWriter(unittest.TestCase):
    def test_write(self):
        mock_producer = MagicMock(spec=KafkaProducer)
        writer = KafkaStreamWriter("test_topic")
        writer._KafkaStreamWriter__producer = mock_producer
        writer.write("Test message")
        mock_producer.produce.assert_called_once_with("Test message", acked)
