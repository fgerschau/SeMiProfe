package api.service;

import api.model.User;
import api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service("UserService")
public class UserService {
    @Autowired
    UserRepository repository;

    public Page<User> get(String search, Boolean isTeacher, Pageable pageable) {
        search = search != null && search.length() > 0 ? search : "";
        Page<User> users = repository.findAll(isTeacher, search, search, search, pageable);

        return users;
    }
}
