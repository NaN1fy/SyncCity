package org.nan1fy.synccity;

import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.restartstrategy.RestartStrategies;
import org.apache.flink.api.common.time.Time;
import lombok.AllArgsConstructor;
import org.apache.flink.connector.kafka.source.KafkaSource;
import org.apache.flink.connector.kafka.source.enumerator.initializer.OffsetsInitializer;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import java.util.concurrent.TimeUnit;

@AllArgsConstructor
public class TemperatureJob {
    private static final String TEMPERATURE_TOPIC = "temperature";

    public static void main(String[] args) throws Exception {
        var bootstrapServers = System.getenv("BOOTSTRAP_SERVERS");
        var schemaRegistryUrl = System.getenv("SCHEMA_REGISTRY_URL");

        if (bootstrapServers == null || schemaRegistryUrl == null) {
            throw new IllegalArgumentException("BOOTSTRAP_SERVERS and SCHEMA_REGISTRY_URL must be set");
        } else {
            System.out.println("Connecting to bootstrap server " + bootstrapServers);
        }
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        env.setRestartStrategy(RestartStrategies.fixedDelayRestart(
                5, // number of restart attempts
                Time.of(15, TimeUnit.SECONDS) // delay
        ));

        KafkaSource<TemperatureReading> temperatureSource = KafkaSource.<TemperatureReading>builder()
                .setStartingOffsets(OffsetsInitializer.latest())
                .setBootstrapServers(bootstrapServers)
                .setTopics(TEMPERATURE_TOPIC)
                .setValueOnlyDeserializer(new KafkaTemperatureSchema())
                .build();

        System.out.println("Creating temperature stream");

        DataStream<TemperatureReading> temperatureStream = env
                .fromSource(
                        temperatureSource,
                        WatermarkStrategy.noWatermarks(),
                        "temperatureSource"
                );

        temperatureStream
                .map(TemperatureReading::toString)
                .print();

        env.execute("temperature_job");

    }
}
