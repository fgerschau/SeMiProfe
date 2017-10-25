package api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Availability {
    @Id
    private long id;
    @Column(columnDefinition="longblob")
    private Event[] eventArray;
    public Availability(){}
    public Availability(long id, Event[] eventArray) {
        this.id = id;
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