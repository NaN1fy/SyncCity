package org.nan1fy.synccity.functions;

import org.apache.flink.api.common.functions.JoinFunction;
import org.apache.flink.streaming.api.functions.co.ProcessJoinFunction;
import org.apache.flink.util.Collector;
import org.nan1fy.synccity.schema.HeatIndexReading;
import org.nan1fy.synccity.schema.HeatIndexTopic;
import org.nan1fy.synccity.schema.HumidityTopic;
import org.nan1fy.synccity.schema.TemperatureTopic;

import java.util.ArrayList;

/* public class HeatIndexFunction extends ProcessJoinFunction<TemperatureTopic, HumidityTopic, HeatIndexTopic> {

    @Override
    public void processElement(TemperatureTopic temp, HumidityTopic humidity, Context ctx, Collector<HeatIndexTopic> out) throws Exception {
        HeatIndexReading heatIndexReading = new HeatIndexReading();
        heatIndexReading.value = calculateHeatIndex(temp.readings.get(0).value, humidity.readings.get(0).value);
        HeatIndexTopic heatIndexTopic = new HeatIndexTopic();
        heatIndexTopic.sensor_id = "heat_index_flink_processing";
        heatIndexTopic.sensor_name = temp.sensor_name;
        heatIndexTopic.sensor_type = "heat_index";
        heatIndexTopic.gather_time = temp.gather_time; // there isn't a real more correct value to use, delta is negligible (+-10s)
        heatIndexTopic.coordinates = temp.coordinates;
        //heatIndexTopic.readings = List.of(heatIndexReading);
        ArrayList<HeatIndexReading> readingsList = new ArrayList<>();
        readingsList.add(heatIndexReading);
        heatIndexTopic.readings = readingsList;
        out.collect(heatIndexTopic);
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
*/
public class HeatIndexFunction implements JoinFunction<TemperatureTopic, HumidityTopic, HeatIndexTopic> {

    @Override
    public HeatIndexTopic join(TemperatureTopic temp, HumidityTopic humidity) {
        HeatIndexReading heatIndexReading = new HeatIndexReading();
        heatIndexReading.type = "Degrees Celsius";
        double scale = Math.pow(10, 2);
        double result  = calculateHeatIndex(temp.readings.get(0).value, humidity.readings.get(0).value);
        heatIndexReading.value = Math.ceil(result * scale) / scale;
        HeatIndexTopic heatIndexTopic = new HeatIndexTopic();
        heatIndexTopic.sensor_id = "heat_index_flink_processing";
        heatIndexTopic.sensor_name = temp.sensor_name;
        heatIndexTopic.sensor_type = "heat_index";
        heatIndexTopic.gather_time = temp.gather_time;
        heatIndexTopic.coordinates = temp.coordinates;
        ArrayList<HeatIndexReading> readingsList = new ArrayList<>();
        readingsList.add(heatIndexReading);
        heatIndexTopic.readings = readingsList;
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