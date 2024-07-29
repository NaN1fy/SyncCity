package org.nan1fy.synccity.schema;

import java.util.List;

public class Topic<T> {

    public String sensor_type;
    public String sensor_name;
    public String sensor_id;
    public String gather_time;
    public List<T> readings;
    public Coordinates coordinates;

    @Override
    public String toString() {
        return "Topic{" +
                "sensor_type='" + sensor_type + '\'' +
                ", sensor_name='" + sensor_name + '\'' +
                ", sensor_id='" + sensor_id + '\'' +
                ", gather_time='" + gather_time + '\'' +
                ", readings=" + readings +
                ", coordinates=" + coordinates +
                '}';
    }
}
