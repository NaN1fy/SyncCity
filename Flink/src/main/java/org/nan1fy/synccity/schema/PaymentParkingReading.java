package org.nan1fy.synccity.schema;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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
