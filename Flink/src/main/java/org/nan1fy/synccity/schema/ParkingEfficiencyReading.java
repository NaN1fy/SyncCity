package org.nan1fy.synccity.schema;

public class ParkingEfficiencyReading implements ReadingFieldInterface {
    public String type;
    public Double value;

    @Override
    public String toString() {
        return "HeatIndexReading{" +
                "type='" + type + '\'' +
                ", value=" + value +
                '}';
    }
}
