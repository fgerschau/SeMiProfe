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
             @RequestParam(value="last-name", required=false) String lastName) {
        List<User> users;
        if (lastName != null && lastName.length() > 0) {
            users = repository.findByLastName(lastName);
        } else {
            users = repository.findAll();
        }

        return users;
    }
}
