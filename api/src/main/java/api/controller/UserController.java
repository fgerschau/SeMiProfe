package api.controller;

import api.model.User;
import api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService service;

    @RequestMapping(value = "/user", method = RequestMethod.GET)
     public List<User> get(
             @RequestParam(value="name", required=false) String name) {

        List<User> users = service.get(name);

        return users;
    }
}
