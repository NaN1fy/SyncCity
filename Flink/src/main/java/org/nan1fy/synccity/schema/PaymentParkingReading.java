package org.nan1fy.synccity.schema;

public class PaymentParkingReading implements ReadingFieldInterface {
    public String type;
    public Double value;

    @Override
    public String toString() {
        return "PaymentParkingReading{" +
                "type='" + type + '\'' +
                ", value=" + value +
                '}';
    }
}
