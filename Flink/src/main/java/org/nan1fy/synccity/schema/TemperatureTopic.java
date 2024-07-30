package org.nan1fy.synccity.schema;

import java.util.ArrayList;
import java.util.List;

public class TemperatureTopic extends AbstractTopic {
    public ArrayList<TemperatureReading> readings;

    @Override
    public String toString() {
        return "TemperatureTopic{" +
                "sensor_type='" + sensor_type + '\'' +
                ", sensor_name='" + sensor_name + '\'' +
                ", sensor_id='" + sensor_id + '\'' +
                ", gather_time='" + gather_time + '\'' +
                ", readings=" + readings +
                ", coordinates=" + coordinates +
                '}';
    }
}
