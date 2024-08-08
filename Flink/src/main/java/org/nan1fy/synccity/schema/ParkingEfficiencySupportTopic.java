package org.nan1fy.synccity.schema;

import java.util.ArrayList;

public class ParkingEfficiencySupportTopic extends AbstractTopic {
    public ArrayList<ParkingEfficiencySupportReading> readings;

    @Override
    public String toString() {
        return "ParkingEfficiencySupportTopic{" +
                "sensor_type='" + sensor_type + '\'' +
                ", sensor_name='" + sensor_name + '\'' +
                ", sensor_id='" + sensor_id + '\'' +
                ", gather_time='" + gather_time + '\'' +
                ", readings=" + readings +
                ", coordinates=" + coordinates +
                '}';
    }
}