import unittest
from unittest.mock import MagicMock

from src.stream_writer.kafka_logic.kafka_producer import KafkaProducer
from src.toolkit.sensor_type import SensorType

class TestKafkaProducer(unittest.TestCase):
    def test_produce_success(self):
        mock_producer = MagicMock()
        kafka = KafkaProducer(SensorType.TEMPERATURE.value)
        kafka._KafkaProducer__producer = mock_producer
        kafka.produce('Test Message', None)
        mock_producer.produce.assert_called_once_with(
            SensorType.TEMPERATURE.value,
            value='Test Message',
            callback=None
        )

    def test_produce_failure(self):
        mock_producer = MagicMock()
        mock_producer.produce.side_effect = Exception('Producer error')
        kafka = KafkaProducer(SensorType.TEMPERATURE)
        kafka._KafkaProducer__producer = mock_producer
        with self.assertRaises(Exception):
            kafka.produce('Test Message', None)

