package org.nan1fy.synccity.schema;

public class HumidityReading  implements ReadingFieldInterface {
    public String type;
    public Double value;

    @Override
    public String toString() {
        return "HumidityReading{" +
                "type='" + type + '\'' +
                ", value=" + value +
                '}';
    }
}
