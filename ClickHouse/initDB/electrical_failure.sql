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
    is_ok Bool,
    repair_time Float64,
    occurrence_fault DATETIME64
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
    JSONExtractBool(rawJSON, 'readings', 1, 'is_ok') AS is_ok,
    JSONExtractFloat(rawJSON, 'readings', 1, 'repair_time') AS repair_time,
    toDateTime64(JSONExtractString(rawJSON, 'readings', 1, 'occurrence'), 0) AS occurrence_fault
FROM sc_database.topic_electrical_failure;
