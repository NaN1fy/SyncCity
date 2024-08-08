package org.nan1fy.synccity.functions;

import org.apache.flink.streaming.api.functions.windowing.WindowFunction;
import org.apache.flink.streaming.api.windowing.windows.TimeWindow;
import org.apache.flink.util.Collector;
import org.nan1fy.synccity.schema.*;

import java.util.ArrayList;
import java.util.Objects;

public class CountCarsFunction implements WindowFunction<ParkingTopic, TotalParkingTopic, String, TimeWindow> {

    @Override
    public void apply(String key, TimeWindow window, Iterable<ParkingTopic> input, Collector<TotalParkingTopic> out) {
        int count = 0;

        for (ParkingTopic value : input) {
            if (value.readings.get(0).plate != "" && !value.readings.get(0).plate.isEmpty()) {
                count++;
            }
        }

        ParkingTopic firstTopic = input.iterator().next();
        TotalParkingReading totalReading = new TotalParkingReading("value", count);
        TotalParkingTopic result = new TotalParkingTopic();
        result.sensor_type = firstTopic.sensor_type;
        String sensorName = firstTopic.sensor_name;
        String[] parts = sensorName.split(" - ");
        result.sensor_name = parts[0];
        result.sensor_id = firstTopic.sensor_id;
        result.gather_time = firstTopic.gather_time;
        result.readings = new ArrayList<>();
        result.readings.add(totalReading);

        out.collect(result);
    }
}
