package org.nan1fy.synccity.functions;

import org.apache.flink.api.common.functions.JoinFunction;
import org.nan1fy.synccity.schema.HeatIndexReading;

public class HeatIndexFunction implements JoinFunction<HeatIndexReading, HeatIndexReading, HeatIndexReading> {
    @Override
    public HeatIndexReading join(HeatIndexReading temperature, HeatIndexReading humidity) {
        return new HeatIndexReading();
    } 
}

