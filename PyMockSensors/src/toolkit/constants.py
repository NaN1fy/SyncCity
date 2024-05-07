import os

from src.stream_writer.stdout_stream_writer import StdoutStreamWriter
from src.stream_writer.kafka_stream_writer import KafkaStreamWriter

STDOUT = StdoutStreamWriter
KAFKAOUT = KafkaStreamWriter

INDENT_JSON = os.environ.get('INDENT_JSON', False)

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
