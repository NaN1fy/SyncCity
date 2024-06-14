from src.sensor.temperature_sensor import TemperatureSensor
from src.sensor.humidity_sensor import HumiditySensor
from src.sensor.precipitation_intensity_sensor import PrecipitationIntensitySensor
from src.sensor.air_pollution_sensor import AirPollutionSensor
from src.sensor.water_level_sensor import WaterLevelSensor
from src.sensor.parking_sensor import ParkingSensor
from src.sensor.payment_parking_sensor import PaymentParkingSensor
from src.sensor.electrical_failure_sensor import ElectricalFailureSensor
from src.sensor.waste_filling_sensor import WasteFillingSensor
from src.sensor.charging_station_sensor import ChargingStationSensor
# from src.sensor.charge_consumption_sensor import ChargeConsumptionSensor
from src.sensor.payment_station_sensor import PaymentStationSensor

from src.toolkit.sensor_type import SensorType

sensor_codex = {
    SensorType.TEMPERATURE.value : TemperatureSensor,
    SensorType.HUMIDITY.value : HumiditySensor,
    SensorType.PRECIPITATION_INTENSITY.value : PrecipitationIntensitySensor,
    SensorType.AIR_POLLUTION.value : AirPollutionSensor,
    SensorType.WATER_LEVEL.value : WaterLevelSensor,
    SensorType.PARKING.value : ParkingSensor,
    SensorType.PAYMENT_PARKING.value : PaymentParkingSensor,
    SensorType.ELECTRICAL_FAILURE.value : ElectricalFailureSensor,
    SensorType.WASTE_FILLING.value : WasteFillingSensor,
    SensorType.CHARGING_STATION.value : ChargingStationSensor,
    # SensorType.CHARGE_CONSUMPTION.value : ChargeConsumptionSensor,
    SensorType.PAYMENT_STATION.value : PaymentStationSensor
}
