package org.nan1fy.synccity.schema;

import java.util.ArrayList;

public class ParkingEfficiencyTopic extends AbstractTopic {
    public ArrayList<ParkingEfficiencyReading> readings;

    @Override
    public String toString() {
        return "ParkingEfficiencyTopic{" +
                "sensor_type='" + sensor_type + '\'' +
                ", sensor_name='" + sensor_name + '\'' +
                ", sensor_id='" + sensor_id + '\'' +
                ", gather_time='" + gather_time + '\'' +
                ", readings=" + readings +
                ", coordinates=" + coordinates +
                '}';
    }
}
