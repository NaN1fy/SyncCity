import clickhouse_connect
import json
import os
import pytest
import time

from datetime import datetime
from random import Random

from src.sensor.precipitation_intensity_sensor import PrecipitationIntensitySensor

from src.stream_writer.kafka_logic.kafka_producer import KafkaProducer

from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_type import SensorType

class TestPrecipitationIntensity():
    @pytest.fixture(scope = 'class')
    def setup_producer(self) -> KafkaProducer:
        topic = SensorType.PRECIPITATION_INTENSITY.value
        return KafkaProducer(topic)

    @pytest.fixture(scope = 'class')
    def setup_clickhouse(self):
        return clickhouse_connect.get_client(host = 'clickhouse', port = 8123, database = 'sc_database', user = 'sc_admin', password = 'sc_password')
    
    @pytest.fixture(scope = 'class')
    def setup_sensor(self):
        return PrecipitationIntensitySensor(sensor_name = 'test', gather_time = datetime, coordinates = Coordinates(0.0, 0.0), socrates = Random(), temporal_second_delay = 1)
    
    def before_test(self, setup_producer, setup_sensor):
        producer = setup_producer
        sensor = setup_sensor
        data = sensor.simulate()
        producer.produce(data, None)

    def after_test(self, setup_clickhouse):
        query = "DELETE FROM sc_database.precipitation_intensity WHERE sensor_name = 'test';"
        setup_clickhouse.query(query)

    def test_persistence(self, setup_clickhouse, setup_producer, setup_sensor):
        self.before_test(setup_producer, setup_sensor)
        timeout = 20
        start_time = time.time()
        while True:
            query = "SELECT sensor_name FROM sc_database.precipitation_intensity WHERE sensor_name = 'test';"
            ans = setup_clickhouse.query(query)
            if ans.result_rows:
                fetched_row = (ans.result_rows[0])[0]
                assert fetched_row is not None, "No entry fetched from database."
                break
            elif time.time() - start_time >= timeout:
                pytest.fail("Timeout occured. No entry fetched within time.")
            else:
                time.sleep(2)
        self.after_test(setup_clickhouse)

