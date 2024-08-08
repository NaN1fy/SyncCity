package org.nan1fy.synccity.schema;

import java.util.ArrayList;

public class PaymentParkingTopic extends AbstractTopic {
    public ArrayList<PaymentParkingReading> readings;

    @Override
    public String toString() {
        return "PaymentParkingTopic{" +
                "sensor_type='" + sensor_type + '\'' +
                ", sensor_name='" + sensor_name + '\'' +
                ", sensor_id='" + sensor_id + '\'' +
                ", gather_time='" + gather_time + '\'' +
                ", readings=" + readings +
                ", coordinates=" + coordinates +
                '}';
    }
}
