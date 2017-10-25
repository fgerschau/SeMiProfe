package api.controller;

import api.model.User;
import api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService service;

    @RequestMapping(value = "/user", method = RequestMethod.GET)
     public Page<User> get(@RequestParam(value="search", required=false) String search,
                           @RequestParam(value="teacher", required=false, defaultValue = "true") Boolean isTeacher,
                           @RequestParam(value="language", required=false) String language,
                           Pageable pageable) {
        language = language == null ? "" : language;

        Page<User> users = service.get(isTeacher, search, language, pageable);

        return users;
    }

    @RequestMapping(value="/languages")
    public List<String> getLanguages() {
        List<String> languages = service.getLanguages();

        return languages;
    }

    @RequestMapping(value="/user/email")
    public User getByEmail(@RequestParam(value="email") String email) {

        User user = service.getByEmail(email);

        return user;
    }

    @RequestMapping(value="/user", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public User create(@RequestBody User user) {
        return service.create(user);
    }
}
