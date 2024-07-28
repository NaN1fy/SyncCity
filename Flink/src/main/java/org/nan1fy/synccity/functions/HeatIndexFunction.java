package org.nan1fy.synccity.functions;

import org.apache.flink.api.common.functions.JoinFunction;
import org.nan1fy.synccity.schema.HeatIndexReading;
import org.nan1fy.synccity.schema.HumidityReading;
import org.nan1fy.synccity.schema.TemperatureReading;
import org.nan1fy.synccity.schema.Topic;

import java.util.List;

public class HeatIndexFunction implements JoinFunction<Topic<TemperatureReading>, Topic<HumidityReading>, Topic<HeatIndexReading>> {

    @Override
    public Topic<HeatIndexReading> join(Topic<TemperatureReading> temp, Topic<HumidityReading> humidity) {
        HeatIndexReading heatIndexReading = new HeatIndexReading();
        heatIndexReading.value = calculateHeatIndex(temp.readings.get(0).value, humidity.readings.get(0).value);
        Topic<HeatIndexReading> heatIndexTopic = new Topic<>();
        heatIndexTopic.sensor_id = "heat_index_flink_processing";
        heatIndexTopic.sensor_name = temp.sensor_name;
        heatIndexTopic.sensor_type = "heat_index";
        heatIndexTopic.gather_time = temp.gather_time;
        heatIndexTopic.coordinates = temp.coordinates;
        heatIndexTopic.readings = List.of(heatIndexReading);
        return heatIndexTopic;
    }

    private double calculateHeatIndex(double temperature, double humidity) {
        return -8.78469475556 +
                (1.61139411 * temperature) +
                (2.33854883889 * humidity) +
                (-0.14611605 * temperature * humidity) +
                (-0.012308094 * temperature * temperature) +
                (-0.0164248277778 * humidity * humidity) +
                (0.002211732 * temperature * temperature * humidity) +
                (0.00072546 * temperature * humidity * humidity) +
                (-0.000003582 * temperature * temperature * humidity * humidity);
    }
}
