package api.controller;

import api.model.Availability;
import api.model.Event;
import api.service.AvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;

@RestController
public class AvailabilityController{
    @Autowired
    AvailabilityService service;
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
    @RequestMapping(value = "/add-availability", method = RequestMethod.POST)
    public @ResponseBody void add(@RequestBody Event event){
        System.out.print(event.getStart());
        Availability a = service.get(1);
        ArrayList<Event> aux = new ArrayList<Event>(Arrays.asList(a.getEventArray()));
        aux.add(event);
        Event[] eventArray = new Event[aux.size()];
        aux.toArray(eventArray);
        a.setEventArray(eventArray);
        a = service.save(a);
    }
    @RequestMapping(value = "/save-availability", method = RequestMethod.POST)
    public @ResponseBody void save(@RequestBody ArrayList<Event> data){

        Event[] eventArray = new Event[data.size()];
        data.toArray(eventArray);
        for (Event e:eventArray) {
            System.out.println(e.getEnd());
        }
        Availability av= new Availability(1,eventArray);
        av = service.save(av);
    }
    @RequestMapping(value = "/availability.json", method = RequestMethod.GET)
    public Event[] get(){
        Availability a = service.get(1);
        Event[] res = a.getEventArray();
        return res;
    }
}