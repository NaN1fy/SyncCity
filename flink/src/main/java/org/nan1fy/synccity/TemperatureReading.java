package org.nan1fy.synccity;

import java.util.List;

public class TemperatureReading {

    public String sensor_type;
    public String sensor_name;
    public String sensor_id;
    public String gather_time;
    public List<Reading> readings;
    public Coordinates coordinates;

    @Override
    public String toString() {
        return "TemperatureReading{" +
                "sensor_type='" + sensor_type + '\'' +
                ", sensor_name='" + sensor_name + '\'' +
                ", sensor_id='" + sensor_id + '\'' +
                ", gather_time='" + gather_time + '\'' +
                ", readings=" + readings +
                ", coordinates=" + coordinates +
                '}';
    }

    public static class Reading {
        public String type;
        public Double value;

        @Override
        public String toString() {
            return "Reading{" +
                    "type='" + type + '\'' +
                    ", value=" + value +
                    '}';
        }
    }

    public static class Coordinates {
        public String type;
        public List<Double> coordinates;

        @Override
        public String toString() {
            return "Coordinates{" +
                    "type='" + type + '\'' +
                    ", coordinates=" + coordinates +
                    '}';
        }
    }
}
