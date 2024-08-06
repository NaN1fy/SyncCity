package org.nan1fy.synccity.schema;

public class ParkingEfficiencyReading implements ReadingFieldInterface {
    public String type;
    public Double value;

    @Override
    public String toString() {
        return "ParkingEfficiencyReading{" +
                "type='" + type + '\'' +
                ", value=" + value +
                '}';
    }
}
