package org.nan1fy.synccity;

import org.apache.flink.api.common.RuntimeExecutionMode;
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
import org.nan1fy.synccity.deserialization.KafkaJsonHumidityDeserializationSchema;
import org.nan1fy.synccity.deserialization.KafkaJsonParkingDeserializationSchema;
import org.nan1fy.synccity.deserialization.KafkaJsonPaymentParkingDeserializationSchema;
import org.nan1fy.synccity.deserialization.KafkaJsonTemperatureDeserializationSchema;
import org.nan1fy.synccity.functions.HeatIndexFunction;
import org.nan1fy.synccity.functions.ParkingEfficiencyFunction;
import org.nan1fy.synccity.schema.*;
import org.nan1fy.synccity.serialization.KafkaJsonHISerializationSchema;
import org.nan1fy.synccity.serialization.KafkaJsonPPSerializationSchema;

import java.time.Duration;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

public class ParkingEfficiencyJob {
    private static final String PARKING_TOPIC = "parking";
    private static final String PAYMENT_PARKING_TOPIC = "payment_parking";
    private static final String PARKING_EFFICIENCY_TOPIC = "parking_efficiency";
    private static final String GROUP_ID = "parking_efficiency_group";
    private DataStream<ParkingTopic> parkingSource;
    private DataStream<PaymentParkingTopic> paymentParkingSource;
    private KafkaSink<ParkingEfficiencyTopic> parkingEfficiencySink;

    public ParkingEfficiencyJob(DataStream<ParkingTopic> parkingSource,
                        DataStream<PaymentParkingTopic> paymentParkingSource,
                        KafkaSink<ParkingEfficiencyTopic> parkingEfficiencySink) {
        this.parkingSource = parkingSource;
        this.paymentParkingSource = paymentParkingSource;
        this.parkingEfficiencySink = parkingEfficiencySink ;
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
                10, // number of restart attempts
                org.apache.flink.api.common.time.Time.of(30, TimeUnit.SECONDS) // delay
        ));

        var parkingSource = KafkaSource.<ParkingTopic>builder()
                .setStartingOffsets(OffsetsInitializer.latest())
                .setBootstrapServers(bootstrapServers)
                .setTopics(PARKING_TOPIC)
                .setGroupId(GROUP_ID)
                .setClientIdPrefix(UUID.randomUUID().toString())
                .setValueOnlyDeserializer(new KafkaJsonParkingDeserializationSchema())
                .build();

        var paymentParkingSource = KafkaSource.<PaymentParkingTopic>builder()
                .setStartingOffsets(OffsetsInitializer.latest())
                .setBootstrapServers(bootstrapServers)
                .setTopics(PAYMENT_PARKING_TOPIC)
                .setGroupId(GROUP_ID)
                .setClientIdPrefix(UUID.randomUUID().toString())
                .setValueOnlyDeserializer(new KafkaJsonPaymentParkingDeserializationSchema())
                .build();

        var sink = KafkaSink.<ParkingEfficiencyTopic>builder()
                .setBootstrapServers(bootstrapServers)
                .setRecordSerializer(KafkaRecordSerializationSchema.builder()
                        .setTopic(PARKING_EFFICIENCY_TOPIC)
                        .setValueSerializationSchema(new KafkaJsonPPSerializationSchema())
                        .build()
                )
                .setTransactionalIdPrefix(UUID.randomUUID().toString())
                .setProperty("transaction.timeout.ms","900000")
                .setProperty("transaction.max.timeout.ms","1200000")
                .setDeliveryGuarantee(DeliveryGuarantee.EXACTLY_ONCE)
                .build();

        //WatermarkStrategy<TemperatureTopic> temperatureWatermark = WatermarkStrategy.noWatermarks();

        //WatermarkStrategy<HumidityTopic> humidityWatermark = WatermarkStrategy.noWatermarks();


        WatermarkStrategy<ParkingTopic> parkingWatermark = WatermarkStrategy.<ParkingTopic>forBoundedOutOfOrderness(Duration.ofSeconds(10));
        WatermarkStrategy<PaymentParkingTopic> paymentParkingWatermark = WatermarkStrategy.<PaymentParkingTopic>forBoundedOutOfOrderness(Duration.ofSeconds(10));

        new ParkingEfficiencyJob(
                env.fromSource(parkingSource, parkingWatermark, "Parking Kafka Source"),
                env.fromSource(paymentParkingSource, paymentParkingWatermark, "PaymentParking Kafka Source"),
                sink
        ).execute(env);
    }


    public void execute(StreamExecutionEnvironment env) throws Exception {
        DataStream<ParkingEfficiencyTopic> parkingEfficiencyStream = parkingSource
                .join(paymentParkingSource)
                .where((KeySelector<ParkingTopic, String>) value -> value.sensor_name)
                .equalTo((KeySelector<PaymentParkingTopic, String>) value -> value.sensor_name)
                .window(TumblingEventTimeWindows.of(org.apache.flink.streaming.api.windowing.time.Time.seconds(25)))
                .apply(new ParkingEfficiencyFunction());

    /* public void execute(StreamExecutionEnvironment env) throws Exception {
        DataStream<HeatIndexTopic> heatIndexStream = temperatureSource
                .keyBy((KeySelector<TemperatureTopic, String>) value -> value.sensor_name)
                .intervalJoin(humiditySource.keyBy((KeySelector<HumidityTopic, String>) value -> value.sensor_name))
                .between(org.apache.flink.streaming.api.windowing.time.Time.seconds(-100), org.apache.flink.streaming.api.windowing.time.Time.seconds(100))
                .process(new HeatIndexFunction());
    */
        parkingEfficiencyStream.sinkTo(parkingEfficiencySink);
        parkingEfficiencyStream
                .map(ParkingEfficiencyTopic::toString)
                .print();
        env.execute("ParkingEfficiencyJob");
    }
}
