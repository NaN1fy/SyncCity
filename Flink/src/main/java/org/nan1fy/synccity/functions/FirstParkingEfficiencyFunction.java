package org.nan1fy.synccity.functions;

import org.apache.flink.api.common.functions.JoinFunction;
import org.nan1fy.synccity.schema.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class FirstParkingEfficiencyFunction implements JoinFunction<PaymentParkingTopic, TotalParkingTopic, ParkingEfficiencySupportTopic> {

    @Override
    public ParkingEfficiencySupportTopic join(PaymentParkingTopic ppark, TotalParkingTopic tpark) {
        double result = ppark.readings.get(0).value * tpark.readings.get(0).value;
        ParkingEfficiencySupportReading parkingEfficiencySupportReading = new ParkingEfficiencySupportReading();
        parkingEfficiencySupportReading.cars_per_avg_bill = result;
        ParkingEfficiencySupportTopic parkingEfficiencySupportTopic = new ParkingEfficiencySupportTopic();
        parkingEfficiencySupportTopic.sensor_id = "parking_efficiency_first_step_flink_processing";
        parkingEfficiencySupportTopic.sensor_name = ppark.sensor_name;
        parkingEfficiencySupportTopic.sensor_type = "parking_first_step_efficiency";
        parkingEfficiencySupportTopic.gather_time = ppark.gather_time;
        parkingEfficiencySupportTopic.coordinates = ppark.coordinates;
        ArrayList<ParkingEfficiencySupportReading> readingsList = new ArrayList<>();
        readingsList.add(parkingEfficiencySupportReading);
        parkingEfficiencySupportTopic.readings = readingsList;
        return parkingEfficiencySupportTopic;
    }
}
