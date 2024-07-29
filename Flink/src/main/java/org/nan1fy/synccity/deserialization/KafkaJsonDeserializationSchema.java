package org.nan1fy.synccity.deserialization;

import org.apache.flink.api.common.serialization.AbstractDeserializationSchema;
import org.apache.flink.shaded.jackson2.com.fasterxml.jackson.databind.ObjectMapper;
import org.nan1fy.synccity.schema.Topic;

import java.io.IOException;

public class KafkaJsonDeserializationSchema<T> extends AbstractDeserializationSchema<Topic<T>> {
    private static final long serialVersionUID = 1L;

    private transient ObjectMapper objectMapper;

    @Override
    public void open(InitializationContext context) {
        objectMapper = new ObjectMapper();
    }

    @Override
    public Topic deserialize(byte[] message) throws IOException {
        return objectMapper.readValue(message, Topic.class);
    }
    

}
