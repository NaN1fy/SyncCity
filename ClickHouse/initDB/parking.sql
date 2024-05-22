CREATE TABLE sc_database.topic_parking
(
    rawJSON String
) ENGINE = Kafka('kafka:9092', 'parking', 'SyncCity', 'JSONAsString');

CREATE TABLE sc_database.parking
(
    sensor_name String,
    sensor_id String,
    gather_time DATETIME64,
    latitude Float64,
    longitude Float64,
    is_available Bool,
    layoff UInt16,
    plate String
) ENGINE = MergeTree()
    ORDER BY (sensor_id, gather_time);

CREATE MATERIALIZED VIEW sc_database.parking_mv
TO sc_database.parking
AS
SELECT
    JSONExtractString(rawJSON, 'sensor_name') AS sensor_name,
    JSONExtractString(rawJSON, 'sensor_id') AS sensor_id,
    toDateTime64(JSONExtractString(rawJSON, 'gather_time'), 0) AS gather_time,
    JSONExtractFloat(rawJSON, 'coordinates', 'coordinates', 1) AS latitude,
    JSONExtractFloat(rawJSON, 'coordinates', 'coordinates', 2) AS longitude,
    JSONExtractFloat(rawJSON, 'readings', 1) AS is_available,
    JSONExtractFloat(rawJSON, 'readings', 2) AS layoff,
    JSONExtractArrayRaw(rawJSON, 'readings', 3) AS plate
FROM sc_database.topic_parking;
