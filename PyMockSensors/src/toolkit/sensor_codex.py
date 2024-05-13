from src.sensor.temperature_sensor import TemperatureSensor
from src.sensor.humidity_sensor import HumiditySensor
from src.sensor.parking_sensor import ParkingSensor

from src.toolkit.sensor_type import SensorType

sensor_codex = {
    SensorType.TEMPERATURE.value : TemperatureSensor,
    SensorType.HUMIDITY.value : HumiditySensor,
    SensorType.PARKING.value : ParkingSensor
}
