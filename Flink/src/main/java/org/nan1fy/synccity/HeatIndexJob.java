package org.nan1fy.synccity;

import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.restartstrategy.RestartStrategies;
import org.apache.flink.api.java.functions.KeySelector;
import org.apache.flink.connector.base.DeliveryGuarantee;
import org.apache.flink.connector.kafka.sink.KafkaRecordSerializationSchema;
import org.apache.flink.connector.kafka.sink.KafkaSink;
import org.apache.flink.connector.kafka.source.KafkaSource;
import org.apache.flink.connector.kafka.source.enumerator.initializer.OffsetsInitializer;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.streaming.api.windowing.assigners.TumblingEventTimeWindows;
import org.nan1fy.synccity.deserialization.KafkaJsonDeserializationSchema;
import org.nan1fy.synccity.functions.HeatIndexFunction;
import org.nan1fy.synccity.schema.*;
import org.nan1fy.synccity.serialization.KafkaJsonSerializationSchema;

import java.util.UUID;
import java.util.concurrent.TimeUnit;

public class HeatIndexJob {
    private static final String TEMPERATURE_TOPIC = "temperature";
    private static final String HUMIDITY_TOPIC = "humidity";
	private static final String HEAT_INDEX_TOPIC = "heat_index";
    private static final String GROUP_ID = "heat_index_group";
	private DataStream<Topic<TemperatureReading>> temperatureSource;
	private DataStream<Topic<HumidityReading>> humiditySource;
	private KafkaSink<Topic<HeatIndexReading>> heatIndexSink;

    public HeatIndexJob(DataStream<Topic<TemperatureReading>> temperatureSource,
                        DataStream<Topic<HumidityReading>> humiditySource,
                        KafkaSink<Topic<HeatIndexReading>> heatIndexSink) {
        this.temperatureSource = temperatureSource;
        this.humiditySource = humiditySource;
        this.heatIndexSink = heatIndexSink;
    }

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
                org.apache.flink.api.common.time.Time.of(15, TimeUnit.SECONDS) // delay
        ));

		var temperatureSource = KafkaSource.<Topic<TemperatureReading>>builder()
                .setStartingOffsets(OffsetsInitializer.latest())
                .setBootstrapServers(bootstrapServers)
                .setTopics(TEMPERATURE_TOPIC)
                .setGroupId(GROUP_ID)
                .setClientIdPrefix(UUID.randomUUID().toString())
                .setValueOnlyDeserializer(new KafkaJsonDeserializationSchema<TemperatureReading>())
                .build();

        var humiditySource = KafkaSource.<Topic<HumidityReading>>builder()
                .setStartingOffsets(OffsetsInitializer.latest())
                .setBootstrapServers(bootstrapServers)
                .setTopics(HUMIDITY_TOPIC)
                .setGroupId(GROUP_ID)
                .setClientIdPrefix(UUID.randomUUID().toString())
                .setValueOnlyDeserializer(new KafkaJsonDeserializationSchema<HumidityReading>())
                .build();
        
        var sink = KafkaSink.<Topic<HeatIndexReading>>builder()
                .setBootstrapServers(bootstrapServers)
                .setRecordSerializer(KafkaRecordSerializationSchema.builder()
                        .setTopic(HEAT_INDEX_TOPIC)
                        .setValueSerializationSchema(new KafkaJsonSerializationSchema<HeatIndexReading>())
                        .build()
                )
                .setDeliveryGuarantee(DeliveryGuarantee.AT_LEAST_ONCE)
                .build();

        WatermarkStrategy<Topic<TemperatureReading>> temperatureWatermark = WatermarkStrategy.noWatermarks();
        WatermarkStrategy<Topic<HumidityReading>> humidityWatermark = WatermarkStrategy.noWatermarks();

	 	new HeatIndexJob(
	 		env.fromSource(temperatureSource, temperatureWatermark, "Temperature Kafka Source"),
	 		env.fromSource(humiditySource, humidityWatermark, "Humidity Kafka Source"),
	 		sink
	 	).execute(env);
    }

    public void execute(StreamExecutionEnvironment env) throws Exception {
        DataStream<Topic<HeatIndexReading>> heatIndexStream = temperatureSource
                .join(humiditySource)
                .where((KeySelector<Topic<TemperatureReading>, String>) value -> value.sensor_name)
                .equalTo((KeySelector<Topic<HumidityReading>, String>) value -> value.sensor_name)
                .window(TumblingEventTimeWindows.of(org.apache.flink.streaming.api.windowing.time.Time.seconds(10)))
                .apply(new HeatIndexFunction());
        heatIndexStream.sinkTo(heatIndexSink);
        heatIndexStream.map(Topic::toString).print();
        env.execute("HeatIndexJob");
    }

}
