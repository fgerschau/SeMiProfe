package api.user.support;

import api.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserRepository repository;

    @RequestMapping("/user")
     public List<User> get(
             @RequestParam(value="name", required=false) String name) {
        List<User> users;
        if (name != null && name.length() > 0) {
            users = repository.findByFirstNameOrLastName(name, name);
        } else {
            users = repository.findAll();
        }

        return users;
    }
}
