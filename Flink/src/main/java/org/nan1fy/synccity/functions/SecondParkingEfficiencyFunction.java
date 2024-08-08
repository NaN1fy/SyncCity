package org.nan1fy.synccity.functions;

import org.apache.flink.api.common.functions.JoinFunction;
import org.nan1fy.synccity.schema.*;

import java.util.ArrayList;

public class SecondParkingEfficiencyFunction implements JoinFunction<ParkingEfficiencySupportTopic, PaymentParkingTopic, PaymentParkingTopic>  {

    @Override
    public PaymentParkingTopic join(ParkingEfficiencySupportTopic epark, PaymentParkingTopic ppark) {
        double tmp = ((1/(epark.readings.get(0).cars_per_avg_bill)) == 0)?1:(epark.readings.get(0).cars_per_avg_bill);
        double result = (tmp * ppark.readings.get(0).value);
        PaymentParkingReading paymentParkingReading = new PaymentParkingReading();
        paymentParkingReading.value = result;
        paymentParkingReading.type = "%";
        PaymentParkingTopic paymentParkingTopic = new PaymentParkingTopic();
        paymentParkingTopic.sensor_id = "parking_efficiency_flink_processing";
        paymentParkingTopic.sensor_name = ppark.sensor_name;
        paymentParkingTopic.sensor_type = "parking_efficiency";
        paymentParkingTopic.gather_time = ppark.gather_time;
        paymentParkingTopic.coordinates = ppark.coordinates;
        ArrayList<PaymentParkingReading> readingsList = new ArrayList<>();
        readingsList.add(paymentParkingReading);
        paymentParkingTopic.readings = readingsList;
        return paymentParkingTopic;
    }
}
