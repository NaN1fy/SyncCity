package org.nan1fy.synccity.schema;

import java.util.List;

public abstract class AbstractTopic {
    public String sensor_type;
    public String sensor_name;
    public String sensor_id;
    public String gather_time;
    public Coordinates coordinates;

    public abstract String toString();
}
