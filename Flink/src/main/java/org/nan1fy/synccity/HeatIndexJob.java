package org.nan1fy.synccity;

import org.nan1fy.synccity.functions.HeatIndexFunction;
import org.nan1fy.synccity.schema.HeatIndexReading;
import org.nan1fy.synccity.schema.KafkaHeatIndexSchema;
import org.nan1fy.synccity.serialization.KafkaSerializationSchema;
import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.restartstrategy.RestartStrategies;
import org.apache.flink.api.common.serialization.SimpleStringSchema;
import org.apache.flink.api.common.time.Time;
import lombok.AllArgsConstructor;

import org.apache.flink.connector.base.DeliveryGuarantee;
import org.apache.flink.connector.kafka.sink.KafkaRecordSerializationSchema;
import org.apache.flink.connector.kafka.sink.KafkaSink;
import org.apache.flink.connector.kafka.source.KafkaSource;
import org.apache.flink.connector.kafka.source.enumerator.initializer.OffsetsInitializer;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.streaming.api.functions.sink.SinkFunction;

import java.util.concurrent.TimeUnit;


@AllArgsConstructor
public class HeatIndexJob {
    private static final String TEMPERATURE_TOPIC = "temperature";
    private static final String TEMPERATURE_GROUP = "temperature_group";
    private static final String HUMIDITY_TOPIC = "humidity";
    private static final String HUMIDITY_GROUP = "humidity_group";
	private static final String HEAT_INDEX_TOPIC = "heat_index";
	private DataStream<HeatIndexReading> temperatureSource;
	private DataStream<HeatIndexReading> humiditySource;
	private KafkaSink<HeatIndexReading> HeatIndexSink;
	//private WatermarkStrategy<HeatIndexJob> watermark;
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

		var temperatureSource = KafkaSource.<HeatIndexReading>builder()
                .setStartingOffsets(OffsetsInitializer.latest())
                .setBootstrapServers(bootstrapServers)
                .setTopics(TEMPERATURE_TOPIC)
                .setGroupId(TEMPERATURE_GROUP)
                .setValueOnlyDeserializer(new KafkaHeatIndexSchema())
                .build();

        var humiditySource = KafkaSource.<HeatIndexReading>builder()
                .setStartingOffsets(OffsetsInitializer.latest())
                .setBootstrapServers(bootstrapServers)
                .setTopics(HUMIDITY_TOPIC)
                .setGroupId(HUMIDITY_GROUP)
                .setValueOnlyDeserializer(new KafkaHeatIndexSchema())
                .build();
        
        var sink = KafkaSink.<HeatIndexReading>builder()
                .setBootstrapServers(bootstrapServers)
                .setRecordSerializer(KafkaRecordSerializationSchema.builder()
                        .setTopic(HEAT_INDEX_TOPIC)
                        .setValueSerializationSchema(new KafkaSerializationSchema())
                        .build()
                )
                .setDeliveryGuarantee(DeliveryGuarantee.AT_LEAST_ONCE)
                .build();

		WatermarkStrategy<HeatIndexReading> watermark = WatermarkStrategy.noWatermarks();

	 	new HeatIndexJob(
	 		env.fromSource(temperatureSource, watermark, "Temperature Kafka Source"), 
	 		env.fromSource(humiditySource, watermark, "Humidity Kafka Source"),
	 		sink
	 	).execute(env);
    }
	public void execute(StreamExecutionEnvironment env) throws Exception {
	//	DataStream<String> HeatIndexStream = temperatureSource.join(humiditySource);
	//	HeatIndexStream.sinkTo(HeatIndexSink);
		temperatureSource.sinkTo(HeatIndexSink);
		env.execute("HeatIndexJob");
	} 

}
