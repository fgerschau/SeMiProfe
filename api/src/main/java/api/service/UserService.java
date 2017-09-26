package api.service;

import api.model.User;
import api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("UserService")
public class UserService {
    @Autowired
    UserRepository repository;

    public Page<User> get(String search, Pageable pageable) {
        Page<User> users;
        if (search != null && search.length() > 0) {
            users = repository.findByFirstNameOrLastNameIgnoreCaseContaining(search, search, pageable);
        } else {
            users = repository.findAll(pageable);
        }

        return users;
    }
}
