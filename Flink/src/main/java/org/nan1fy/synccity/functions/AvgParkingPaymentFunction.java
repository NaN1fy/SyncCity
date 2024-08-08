package org.nan1fy.synccity.functions;

import org.apache.flink.streaming.api.functions.windowing.WindowFunction;
import org.apache.flink.streaming.api.windowing.windows.TimeWindow;
import org.apache.flink.util.Collector;
import org.nan1fy.synccity.schema.*;

public class AvgParkingPaymentFunction implements WindowFunction<PaymentParkingTopic, PaymentParkingTopic, String, TimeWindow> {

    @Override
    public void apply(String key, TimeWindow window, Iterable<PaymentParkingTopic> input, Collector<PaymentParkingTopic> out) {
        Double sum = 0.0;
        int count = 0;

        for (PaymentParkingTopic value : input) {
            sum += value.readings.get(0).value;
            count ++;
        }
        double scale = Math.pow(10, 2);
        PaymentParkingTopic result = input.iterator().next();
        result.readings.set(0, new PaymentParkingReading("€", Math.ceil(sum * scale) / scale));
        out.collect(result);
    }
}