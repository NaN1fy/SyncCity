package org.nan1fy.synccity.functions;

import org.apache.flink.api.common.functions.JoinFunction;
import org.nan1fy.synccity.schema.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class ParkingEfficiencyFunction implements JoinFunction<ParkingTopic, PaymentParkingTopic, ParkingEfficiencyTopic> {

    private Map<String, Integer> parkingCapacityMap = new HashMap<>();

    @Override
    public ParkingEfficiencyTopic join(ParkingTopic park, PaymentParkingTopic ppark) {
        // Debug: Log input data
        System.out.println("Debug: Received ParkingTopic: " + park);
        System.out.println("Debug: Received PaymentParkingTopic: " + ppark);

        double totalRevenue = ppark.readings.stream()
                .mapToDouble(reading -> reading.value)
                .sum();
        System.out.println("Debug: Total Revenue: " + totalRevenue);

        String parkingName = park.sensor_name.split(" - ")[0];
        System.out.println("Debug: Parking Name: " + parkingName);

        int totalCapacity = getTotalCapacityForParking(parkingName, park);
        System.out.println("Debug: Total Capacity: " + totalCapacity);

        double averagePricePerSpot = ppark.readings.stream()
                .mapToDouble(reading -> reading.value)
                .average()
                .orElse(0.0);
        System.out.println("Debug: Average Price Per Spot: " + averagePricePerSpot);

        double economicEfficiency = totalCapacity > 0 ? totalRevenue / (totalCapacity * averagePricePerSpot) : 0;
        System.out.println("Debug: Economic Efficiency: " + economicEfficiency);

        ParkingEfficiencyReading parkingEfficiencyReading = new ParkingEfficiencyReading();
        parkingEfficiencyReading.type = "%";
        parkingEfficiencyReading.value = economicEfficiency;
        ParkingEfficiencyTopic parkingEfficiencyTopic = new ParkingEfficiencyTopic();
        parkingEfficiencyTopic.sensor_id = "parking_efficiency_flink_processing";
        parkingEfficiencyTopic.sensor_name = park.sensor_name;
        parkingEfficiencyTopic.sensor_type = "parking_efficiency";
        parkingEfficiencyTopic.gather_time = park.gather_time;
        parkingEfficiencyTopic.coordinates = park.coordinates;
        ArrayList<ParkingEfficiencyReading> readingsList = new ArrayList<>();
        readingsList.add(parkingEfficiencyReading);
        parkingEfficiencyTopic.readings = readingsList;

        // Debug: Log output data
        System.out.println("Debug: Produced ParkingEfficiencyTopic: " + parkingEfficiencyTopic);

        return parkingEfficiencyTopic;
    }

    private int getTotalCapacityForParking(String parkingName, ParkingTopic park) {
        // Debug: Check if total capacity has been calculated
        if (parkingCapacityMap.containsKey(parkingName)) {
            System.out.println("Debug: Returning cached capacity for " + parkingName);
            return parkingCapacityMap.get(parkingName);
        }

        long distinctSpots = park.readings.stream()
                .filter(reading -> park.sensor_name.contains(parkingName))
                .map(reading -> park.sensor_id) // Assume che sensor_id sia l'identificatore unico per ogni stallo
                .distinct() // Filtra i duplicati
                .count();

        // Debug: Log calculated distinct spots
        System.out.println("Debug: Calculated distinct spots for " + parkingName + ": " + distinctSpots);

        // Memorizza il risultato nella mappa
        parkingCapacityMap.put(parkingName, (int) distinctSpots);

        return (int) distinctSpots;
    }
}
