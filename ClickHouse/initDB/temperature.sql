CREATE TABLE sc_database.raw_temperature
(
    rawJSON String
) ENGINE = Kafka('kafka:9092', 'temperature', 'SyncCity', 'JSONAsString');

CREATE TABLE sc_database.temperature
(
    sensor_name String,
    sensor_id String,
    gather_time DATETIME64,
    latitude FLOAT,
    longitude FLOAT,
    readings FLOAT
) ENGINE = MergeTree()
ORDER BY (sensor_id, gather_time);

CREATE MATERIALIZED VIEW sc_database.temperature_mv
TO sc_database.temperature
AS
SELECT
    JSONExtractString(rawJSON, 'sensor_name') AS sensor_name,
    toDateTime64(JSONExtractString(rawJSON, 'gather_time'), 1) AS gather_time,
    JSONExtractFloat(rawJSON, 'coordinates', 1) AS latitude,
    JSONExtractFloat(rawJSON, 'coordinates', 2) AS longitude,
    JSONExtractFloat(rawJSON, 'readings', 1, 'value') AS readings
FROM sc_database.raw_temperature;