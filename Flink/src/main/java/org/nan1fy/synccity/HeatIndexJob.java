package org.nan1fy.synccity;

import org.apache.flink.api.common.RuntimeExecutionMode;
import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.restartstrategy.RestartStrategies;
import org.apache.flink.api.common.time.Time;
import org.apache.flink.api.java.functions.KeySelector;
import org.apache.flink.connector.base.DeliveryGuarantee;
import org.apache.flink.connector.kafka.sink.KafkaRecordSerializationSchema;
import org.apache.flink.connector.kafka.sink.KafkaSink;
import org.apache.flink.connector.kafka.source.KafkaSource;
import org.apache.flink.connector.kafka.source.enumerator.initializer.OffsetsInitializer;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.streaming.api.functions.co.ProcessJoinFunction;
import org.apache.flink.streaming.api.windowing.assigners.TumblingEventTimeWindows;
import org.apache.flink.util.Collector;
import org.nan1fy.synccity.deserialization.KafkaJsonHumidityDeserializationSchema;
import org.nan1fy.synccity.deserialization.KafkaJsonTemperatureDeserializationSchema;
import org.nan1fy.synccity.functions.HeatIndexFunction;
import org.nan1fy.synccity.schema.*;
import org.nan1fy.synccity.serialization.KafkaJsonHISerializationSchema;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

public class  HeatIndexJob {
    private static final String TEMPERATURE_TOPIC = "temperature";
    private static final String HUMIDITY_TOPIC = "humidity";
	private static final String HEAT_INDEX_TOPIC = "heat_index";
    private static final String GROUP_ID = "heat_index_group";
	private DataStream<TemperatureTopic> temperatureSource;
	private DataStream<HumidityTopic> humiditySource;
	private KafkaSink<HeatIndexTopic> heatIndexSink;

    public HeatIndexJob(DataStream<TemperatureTopic> temperatureSource,
                        DataStream<HumidityTopic> humiditySource,
                        KafkaSink<HeatIndexTopic> heatIndexSink) {
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
        env.setRuntimeMode(RuntimeExecutionMode.STREAMING);
        env.getConfig().setAutoWatermarkInterval(1000);
        env.enableCheckpointing(5000);


        env.setRestartStrategy(RestartStrategies.fixedDelayRestart(
                5, // number of restart attempts
                org.apache.flink.api.common.time.Time.of(15, TimeUnit.SECONDS) // delay
        ));

		var temperatureSource = KafkaSource.<TemperatureTopic>builder()
                .setStartingOffsets(OffsetsInitializer.latest())
                .setBootstrapServers(bootstrapServers)
                .setTopics(TEMPERATURE_TOPIC)
                .setGroupId(GROUP_ID)
                .setClientIdPrefix(UUID.randomUUID().toString())
                .setValueOnlyDeserializer(new KafkaJsonTemperatureDeserializationSchema())
                .build();

        var humiditySource = KafkaSource.<HumidityTopic>builder()
                .setStartingOffsets(OffsetsInitializer.latest())
                .setBootstrapServers(bootstrapServers)
                .setTopics(HUMIDITY_TOPIC)
                .setGroupId(GROUP_ID)
                .setClientIdPrefix(UUID.randomUUID().toString())
                .setValueOnlyDeserializer(new KafkaJsonHumidityDeserializationSchema())
                .build();
        
        var sink = KafkaSink.<HeatIndexTopic>builder()
                .setBootstrapServers(bootstrapServers)
                .setRecordSerializer(KafkaRecordSerializationSchema.builder()
                        .setTopic(HEAT_INDEX_TOPIC)
                        .setValueSerializationSchema(new KafkaJsonHISerializationSchema())
                        .build()
                )
                .setTransactionalIdPrefix(UUID.randomUUID().toString())
                .setProperty("transaction.timeout.ms","900000")
                .setProperty("transaction.max.timeout.ms","1200000")
                .setDeliveryGuarantee(DeliveryGuarantee.EXACTLY_ONCE)
                .build();

        //WatermarkStrategy<TemperatureTopic> temperatureWatermark = WatermarkStrategy.noWatermarks();

        //WatermarkStrategy<HumidityTopic> humidityWatermark = WatermarkStrategy.noWatermarks();


        WatermarkStrategy<TemperatureTopic> temperatureWatermark = WatermarkStrategy.<TemperatureTopic>forBoundedOutOfOrderness(Duration.ofSeconds(10));
        WatermarkStrategy<HumidityTopic> humidityWatermark = WatermarkStrategy.<HumidityTopic>forBoundedOutOfOrderness(Duration.ofSeconds(10));

	 	new HeatIndexJob(
	 		env.fromSource(temperatureSource, temperatureWatermark, "Temperature Kafka Source"),
	 		env.fromSource(humiditySource, humidityWatermark, "Humidity Kafka Source"),
	 		sink
	 	).execute(env);
    }


    public void execute(StreamExecutionEnvironment env) throws Exception {
        DataStream<HeatIndexTopic> heatIndexStream = temperatureSource
                .join(humiditySource)
                .where((KeySelector<TemperatureTopic, String>) value -> value.sensor_name)
                .equalTo((KeySelector<HumidityTopic, String>) value -> value.sensor_name)
                .window(TumblingEventTimeWindows.of(org.apache.flink.streaming.api.windowing.time.Time.seconds(25)))
                .apply(new HeatIndexFunction());

    /* public void execute(StreamExecutionEnvironment env) throws Exception {
        DataStream<HeatIndexTopic> heatIndexStream = temperatureSource
                .keyBy((KeySelector<TemperatureTopic, String>) value -> value.sensor_name)
                .intervalJoin(humiditySource.keyBy((KeySelector<HumidityTopic, String>) value -> value.sensor_name))
                .between(org.apache.flink.streaming.api.windowing.time.Time.seconds(-100), org.apache.flink.streaming.api.windowing.time.Time.seconds(100))
                .process(new HeatIndexFunction());
    */
        heatIndexStream.sinkTo(heatIndexSink);
        env.execute("HeatIndexJob");
    }
}
