package api.model;

import java.io.Serializable;

public class Event implements Serializable{
    private Long id;
    private String title;
    private String start;
    private String end;

    private Event(){}

    public Long getId() {
        return id;
    }

    public Event(String title, String start, String end) {
        this.title = title;
        this.start = start;
        this.end = end;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }
}
