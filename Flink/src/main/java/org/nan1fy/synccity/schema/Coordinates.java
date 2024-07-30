package org.nan1fy.synccity.schema;

import java.util.List;

public class Coordinates {
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