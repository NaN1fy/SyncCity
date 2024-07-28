package org.nan1fy.synccity.serialization;

import org.apache.flink.api.common.serialization.SerializationSchema;
import org.apache.flink.shaded.jackson2.com.fasterxml.jackson.databind.ObjectMapper;
import org.nan1fy.synccity.schema.Topic;

public class KafkaJsonSerializationSchema<T> implements SerializationSchema<Topic<T>> {
    private static final long serialVersionUID = 1L;
    
    private transient ObjectMapper objectMapper;

    @Override
    public void open(InitializationContext context) {
        objectMapper = new ObjectMapper();
    }

    @Override
    public byte[] serialize(Topic element) {
        try {
            return objectMapper.writeValueAsBytes(element);
        } catch (Exception e) {
            throw new RuntimeException("Failed to serialize", e);
        }
    }
}