package api.controller;

import api.model.Availability;
import api.model.Event;
import api.service.AvailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.NoSuchElementException;

@RestController
public class AvailabilityController{
    @Autowired
    AvailabilityService service;
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");

    @RequestMapping(value = "/save-availability", method = RequestMethod.POST)
    public @ResponseBody void save(@RequestBody ArrayList<Event> data,@RequestParam(value="id") int id){
        long i = 0;
        Event[] eventArray = new Event[data.size()];
        data.toArray(eventArray);
        for (Event e:eventArray) {
            e.setId(i);
            System.out.println(e.getEnd());
            i++;
        }
        Availability av= new Availability(id,eventArray);
        av = service.save(av);
    }
    @RequestMapping(value = "/availability", method = RequestMethod.GET)
    public Event[] get(@RequestParam("id") int id){
        try {
            Availability a = service.get(id);
            Event[] res = a.getEventArray();
            return res;
        }catch (NoSuchElementException e){
            Event[] eventArray = new Event[0];
            Availability av= new Availability(1,eventArray);
            av = service.save(av);
            eventArray = av.getEventArray();
            return eventArray;
        }
    }
}