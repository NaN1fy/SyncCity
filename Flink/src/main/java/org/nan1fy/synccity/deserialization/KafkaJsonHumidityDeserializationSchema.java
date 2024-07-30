package org.nan1fy.synccity.deserialization;

import org.apache.flink.api.common.serialization.AbstractDeserializationSchema;
import org.apache.flink.api.common.serialization.DeserializationSchema;
import org.apache.flink.shaded.jackson2.com.fasterxml.jackson.databind.ObjectMapper;
import org.nan1fy.synccity.schema.HumidityTopic;

import java.io.IOException;

public class KafkaJsonHumidityDeserializationSchema extends AbstractDeserializationSchema<HumidityTopic> {
    private static final long serialVersionUID = 1L;

    private transient ObjectMapper objectMapper;

    @Override
    public void open(DeserializationSchema.InitializationContext context) {
        objectMapper = new ObjectMapper();
    }

    @Override
    public HumidityTopic deserialize(byte[] message) throws IOException {
        return objectMapper.readValue(message, HumidityTopic.class);
    }
}
