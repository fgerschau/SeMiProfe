package api.model;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.oracle.javafx.jmx.json.JSONReader;
import org.hibernate.annotations.TypeDef;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.xml.crypto.Data;
import java.util.Date;


@Entity
public class Availability {
    @Id
    private long id;
    private Event eventArray[];

    public Availability(long id, Event[] eventArray) {
        id = id;
        this.eventArray = eventArray;
    }

    public long getId() {
        return id;
    }

    public Event[] getEventArray() {
        return eventArray;
    }

    public void setEventArray(Event[] eventArray) {
        this.eventArray = eventArray;
    }
}