CREATE TABLE sc_database.topic_parking_efficiency
(
    rawJSON String
) ENGINE = Kafka('kafka:9092', 'parking_efficiency', 'SyncCity', 'JSONAsString');

CREATE TABLE sc_database.parking_efficiency
(
    sensor_name String,
    sensor_id String,
    gather_time DATETIME64,
    latitude Float64,
    longitude Float64,
    readings Float64
) ENGINE = MergeTree()
    ORDER BY (sensor_id, gather_time);

CREATE MATERIALIZED VIEW sc_database.parking_efficiency_mv
TO sc_database.parking_efficiency
AS
SELECT
    JSONExtractString(rawJSON, 'sensor_name') AS sensor_name,
    JSONExtractString(rawJSON, 'sensor_id') AS sensor_id,
    toDateTime64(JSONExtractString(rawJSON, 'gather_time'), 0) AS gather_time,
    JSONExtractFloat(rawJSON, 'coordinates', 'coordinates', 1) AS latitude,
    JSONExtractFloat(rawJSON, 'coordinates', 'coordinates', 2) AS longitude,
    JSONExtractFloat(rawJSON, 'readings', 1, 'value') AS readings
FROM sc_database.topic_parking_efficiency;
