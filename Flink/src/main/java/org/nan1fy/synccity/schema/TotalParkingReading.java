package org.nan1fy.synccity.schema;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class TotalParkingReading  implements ReadingFieldInterface {
    public String type;
    public Integer value;

    @Override
    public String toString() {
        return "TotalParkingReading{" +
                "type='" + type + '\'' +
                ", value=" + value +
                '}';
    }
}
