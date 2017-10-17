package api.controller;

import api.model.DateTime;
import api.model.Event;
import api.service.AvailabilityService;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class AvailabilityController{
    @Autowired
    AvailabilityService service;
    @RequestMapping(value = "/save-availability", method = RequestMethod.POST)
    public @ResponseBody void save(@RequestBody ArrayList<Event> data){
        System.out.print(data.get(1).getTitle());
    }
    @RequestMapping(value = "/availability.json", method = RequestMethod.GET)
    public Event[] get(){
        Event res[] = new Event[3];
        DateTime start = new DateTime(2017,10,12,12,10);
        DateTime end = new DateTime(2017,10,12,18,10);
        res[0] = new Event("No disponible",start.toString(),end.toString());
        res[1] = new Event("No disponible",start.toString(),end.toString());
        res[2] = new Event("No disponible",start.toString(),end.toString());
        return res;
    }
}