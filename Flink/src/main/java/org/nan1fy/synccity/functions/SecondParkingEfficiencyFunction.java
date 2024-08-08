package org.nan1fy.synccity.functions;

import org.apache.flink.api.common.functions.JoinFunction;
import org.nan1fy.synccity.schema.*;

import java.text.DecimalFormat;
import java.util.ArrayList;

public class SecondParkingEfficiencyFunction implements JoinFunction<ParkingEfficiencySupportTopic, PaymentParkingTopic, ParkingEfficiencyTopic>  {
    private static final DecimalFormat df = new DecimalFormat("0.00");

    @Override
    public ParkingEfficiencyTopic join(ParkingEfficiencySupportTopic epark, PaymentParkingTopic ppark) {
        double tmp = ((1/(epark.readings.get(0).cars_per_avg_bill)) == 0)?1:(epark.readings.get(0).cars_per_avg_bill);
        double result = (tmp * ppark.readings.get(0).value);
        ParkingEfficiencyReading parkingEfficiencyReading = new ParkingEfficiencyReading();
        parkingEfficiencyReading.value =Double.parseDouble(df.format(result));
        parkingEfficiencyReading.type = "%";
        ParkingEfficiencyTopic parkingEfficiencyTopic = new ParkingEfficiencyTopic();
        parkingEfficiencyTopic.sensor_id = "parking_efficiency_flink_processing";
        parkingEfficiencyTopic.sensor_name = ppark.sensor_name;
        parkingEfficiencyTopic.sensor_type = "parking_efficiency";
        parkingEfficiencyTopic.gather_time = ppark.gather_time;
        parkingEfficiencyTopic.coordinates = ppark.coordinates;
        ArrayList<ParkingEfficiencyReading> readingsList = new ArrayList<>();
        readingsList.add(parkingEfficiencyReading);
        parkingEfficiencyTopic.readings = readingsList;
        return parkingEfficiencyTopic;
    }
}
