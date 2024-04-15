from src.sensor.temperature_sensor import TemperatureSensor

from src.toolkit.sensor_type import SensorType

sensor_codex = {
    SensorType.TEMPERATURE.value : TemperatureSensor,
}
