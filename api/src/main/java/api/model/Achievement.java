package api.model;

import java.io.Serializable;
import java.util.ArrayList;

public class Achievement implements Serializable{
    String description;
    int points;
    boolean completed;

    public Achievement(String description, int points, boolean completed) {
        this.description = description;
        this.points = points;
        this.completed = completed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
    public static Achievement[] generateAchievements(){
        ArrayList<Achievement> aux = new ArrayList<Achievement>();
        aux.add(new Achievement("logro1",12,false));
        aux.add(new Achievement("logro2",12,false));
        aux.add(new Achievement("logro3",12,false));
        aux.add(new Achievement("logro4",12,false));
        aux.add(new Achievement("logro5",12,false));
        aux.add(new Achievement("logro6",12,false));
        aux.add(new Achievement("logro7",12,false));
        aux.add(new Achievement("logro8",12,false));
        Achievement[] res = new Achievement[aux.size()];
        aux.toArray(res);
        return res;
    }
}
