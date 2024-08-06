package org.nan1fy.synccity.schema;

public class ParkingReading implements ReadingFieldInterface{
    public boolean is_available;
    public Integer lay_off;
    public String plate;
    @Override
    public String toString() {
        return "ParkingReading{" +
                "is_available='" + is_available + '\'' +
                ", lay_off=" + lay_off +
                ", plate=" + plate +
                '}';
    }
}