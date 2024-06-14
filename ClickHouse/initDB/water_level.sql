CREATE TABLE sc_database.topic_water_level
(
    rawJSON String
) ENGINE = Kafka('kafka:9092', 'water_level', 'SyncCity', 'JSONAsString');

CREATE TABLE sc_database.water_level
(
    sensor_name String,
    sensor_id String,
    gather_time DATETIME64,
    latitude Float64,
    longitude Float64,
    readings INT
) ENGINE = MergeTree()
    ORDER BY (sensor_id, gather_time);

CREATE MATERIALIZED VIEW sc_database.water_level_mv
TO sc_database.water_level
AS
SELECT
    JSONExtractString(rawJSON, 'sensor_name') AS sensor_name,
    JSONExtractString(rawJSON, 'sensor_id') AS sensor_id,
    toDateTime64(JSONExtractString(rawJSON, 'gather_time'), 0) AS gather_time,
    JSONExtractFloat(rawJSON, 'coordinates', 'coordinates', 1) AS latitude,
    JSONExtractFloat(rawJSON, 'coordinates', 'coordinates', 2) AS longitude,
    JSONExtractInt(rawJSON, 'readings', 1, 'value') AS readings
FROM sc_database.topic_water_level;
