package org.nan1fy.synccity.schema;

public class TemperatureReading implements ReadingFieldInterface {
    public String type;
    public Double value;

    @Override
    public String toString() {
        return "TemperatureReading{" +
                "type='" + type + '\'' +
                ", value=" + value +
                '}';
    }
}
