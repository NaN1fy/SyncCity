CREATE TABLE sc_database.topic_air_pollution
(
    rawJSON String
) ENGINE = Kafka('kafka:9092', 'air_pollution', 'SyncCity', 'JSONAsString');

CREATE TABLE sc_database.air_pollution
(
    sensor_name String,
    sensor_id String,
    gather_time DATETIME64,
    latitude Float64,
    longitude Float64,
    PM2_5 Float64,
    PM10 Float64,
    O3 Float64,
    NO2 Float64
) ENGINE = MergeTree()
    ORDER BY (sensor_id, gather_time);

CREATE MATERIALIZED VIEW sc_database.air_pollution_mv
TO sc_database.air_pollution
AS
SELECT
    JSONExtractString(rawJSON, 'sensor_name') AS sensor_name,
    JSONExtractString(rawJSON, 'sensor_id') AS sensor_id,
    toDateTime64(JSONExtractString(rawJSON, 'gather_time'), 0) AS gather_time,
    JSONExtractFloat(rawJSON, 'coordinates', 'coordinates', 1) AS latitude,
    JSONExtractFloat(rawJSON, 'coordinates', 'coordinates', 2) AS longitude,
    JSONExtractFloat(rawJSON, 'readings', 1, 'PM2_5') AS PM2_5,
    JSONExtractFloat(rawJSON, 'readings', 1, 'PM10') AS PM10,
    JSONExtractFloat(rawJSON, 'readings', 1, 'O3') AS O3,
    JSONExtractFloat(rawJSON, 'readings', 1, 'NO2') AS NO2
FROM sc_database.topic_air_pollution;
