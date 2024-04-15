from src.toolkit.sensor_type import SensorType
from src.sensor.temperature_sensor import TemperatureSensor

sensor_codex = {
    SensorType.TEMPERATURE.value : TemperatureSensor,
}
