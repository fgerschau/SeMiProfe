package api.controller;

import api.model.Availability;
import api.model.Event;
import api.service.AvailabilityService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AvailabilityController{
    @Autowired
    AvailabilityService service;
    @RequestMapping(value = "/save-availability", method = RequestMethod.POST)
    public void save(@RequestBody String jsonobject){
        System.out.print(jsonobject);
    }
    @RequestMapping(value = "/availability", method = RequestMethod.GET)
    public String get(){
         return "helo";
    }
}