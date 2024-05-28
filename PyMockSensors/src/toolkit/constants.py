import os
import numpy as np
import threading

from src.stream_writer.stdout_stream_writer import StdoutStreamWriter
from src.stream_writer.kafka_stream_writer import KafkaStreamWriter
from src.toolkit.sensor_type import SensorType

STDOUT = StdoutStreamWriter
KAFKAOUT = KafkaStreamWriter

INDENT_JSON = os.environ.get('INDENT_JSON', False)

signal_list = {sensor: list() for sensor in SensorType}
signal_lock = {sensor: threading.Lock() for sensor in SensorType}

SEC_IN_HOUR = 3600
SEC_IN_DAY = 86400
TEMP_RANGE = {
    0: (5, 9),
    1: (4, 9),
    2: (3, 8),
    3: (3, 8),
    4: (4, 8),
    5: (6, 11),
    6: (9, 15),
    7: (12, 18),
    8: (15, 21),
    9: (18, 24),
    10: (19, 25),
    11: (19, 25),
    12: (19, 26),
    13: (19, 26),
    14: (20, 25),
    15: (20, 25),
    16: (20, 25),
    17: (20, 25),
    18: (16, 22),
    19: (12, 18),
    20: (9, 14),
    21: (7, 12),
    22: (6, 11),
    23: (5, 10)
}


# month: (umid_assoluta_media, saturazione_notte, sat_mattina_sera, sat_pomeriggio)
HUMID_RANGE = {
    1: (4.7, 3.3, 4.9, 6.8),
    2: (4.7, 4.9, 6.8, 7.8),
    3: (6.5, 6.8, 8.4, 10),
    4: (8.0, 8.4, 10.8, 14.7),
    5: (10.5, 11.5, 13.8, 19.8),
    6: (11.7, 14.7, 17.3, 22),
    7: (16, 17.3, 22.5, 28),
    8: (15, 16, 18.5, 25.9),
    9: (10.8, 12.9, 14.7, 20.5),
    10: (8.5, 8.9, 10.8, 13.8),
    11: (6.0, 6.8, 7.8, 10.8),
    12: (4.7, 4.9, 6.8, 7.8)
}
