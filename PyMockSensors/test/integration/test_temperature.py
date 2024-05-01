from random import Random
from src.sensor.temperature_sensor import TemperatureSensor
from src.stream_writer.kafka_logic.kafka_producer import KafkaProducer
from src.toolkit.coordinates import Coordinates
from src.toolkit.sensor_type import SensorType
import click_house_connect
import datetime
import json
import pytest



class TestTemperature ():

    @pytest.fixture(scope = 'class')
    def setup_producer(self) -> KafkaProducer :
        topic = SensorType.TEMPERATURE
        return KafkaProducer(topic)

    @pytest.fixture(scope = 'class')
    def setup_clickHouse(self) :
        return click_house_connect.getclient(host = 'localhost', port = 8123, database = 'sc_database', user = 'sc_user', password = 'sc_password')
    
    @pytest.fizture(scope = 'class')
    def setup_sensor(self) :
        return TemperatureSensor(sensor_name = 'test', gather_time = datetime, coordinates = Coordinates(0.0, 0.0), socrates = Random())
    
    def before_test() :
        producer = setup_producer
        sensor = setup_sensor
        data = sensor.simulate()
        producer.produce(data, None)