CREATE TABLE sc_database.topic_electrical_failure
(
    rawJSON String
) ENGINE = Kafka('kafka:9092', 'electrical_failure', 'SyncCity', 'JSONAsString');

CREATE TABLE sc_database.electrical_failure
(
    sensor_name String,
    sensor_id String,
    gather_time DATETIME64,
    latitude Float64,
    longitude Float64,
    -- readings Float64
) ENGINE = MergeTree()
    ORDER BY (sensor_id, gather_time);

CREATE MATERIALIZED VIEW sc_database.electrical_failure_mv
TO sc_database.electrical_failure
AS
SELECT
    JSONExtractString(rawJSON, 'sensor_name') AS sensor_name,
    JSONExtractString(rawJSON, 'sensor_id') AS sensor_id,
    toDateTime64(JSONExtractString(rawJSON, 'gather_time'), 0) AS gather_time,
    JSONExtractFloat(rawJSON, 'coordinates', 'coordinates', 1) AS latitude,
    JSONExtractFloat(rawJSON, 'coordinates', 'coordinates', 2) AS longitude,
    -- JSONExtractFloat(rawJSON, 'readings', 1, 'value') AS readings
    -- da fare extractarray siccome le letture sono molteplici campi
FROM sc_database.topic_electrical_failure;
