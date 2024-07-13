from enum import Enum

class SensorType(Enum):
    TEMPERATURE = "temperature"
    HUMIDITY = "humidity"
    PRECIPITATION_INTENSITY = "precipitation_intensity"
    AIR_POLLUTION = "air_pollution"
    WATER_LEVEL = "water_level"
    PARKING = "parking"
    PAYMENT_PARKING = "payment_parking"
    ELECTRICAL_FAILURE = "electrical_failure"
    WASTE_FILLING = "waste_filling"
    CHARGING_STATION = "charging_station"
    CHARGE_CONSUMPTION = "charge_consumption"
    PAYMENT_STATION = "payment_station"

