package api.service;

import api.model.User;
import api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("UserService")
public class UserService {
    @Autowired
    UserRepository repository;

    public List<User> get(String name) {
        List<User> users;
        if (name != null && name.length() > 0) {
            users = repository.findByFirstNameOrLastName(name, name);
        } else {
            users = repository.findAll();
        }

        return users;
    }
}
