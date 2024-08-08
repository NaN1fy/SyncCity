package org.nan1fy.synccity.schema;

import lombok.Getter;

import java.util.ArrayList;

public class TotalParkingTopic extends AbstractTopic {
    public ArrayList<TotalParkingReading> readings;

    @Override
    public String toString() {
        return " TotalParkingTopic{" +
                "sensor_type='" + sensor_type + '\'' +
                ", sensor_name='" + sensor_name + '\'' +
                ", sensor_id='" + sensor_id + '\'' +
                ", gather_time='" + gather_time + '\'' +
                ", readings=" + readings +
                ", coordinates=" + coordinates +
                '}';
    }
}
