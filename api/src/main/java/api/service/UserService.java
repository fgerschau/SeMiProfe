package api.service;

import api.model.User;
import api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service("UserService")
public class UserService {
    @Autowired
    UserRepository repository;

    public Page<User> get(Boolean isTeacher, String search, String language, Set<Integer> cefrLevels, String town, String state, Pageable pageable) {
        search = search != null && search.length() > 0 ? search : "";
        Page<User> users;
        if (cefrLevels != null && cefrLevels.size() > 0) {
            List<User> userList = repository.findByCefrLevels_levelIn(cefrLevels);
            List<Long> userIds = new ArrayList<>(userList.size());
            for (User user : userList) {
                userIds.add(user.getId());
            }

            userIds = userIds.size() > 0 ? userIds : null;
            
            users = repository.findAllByIdsAndQuery(isTeacher, search, search, language, town, state, userIds, pageable);
        } else {
            users = repository.findAll(isTeacher, search, search, language, town, state, pageable);
        }

        return users;
    }

    public List<String> getLanguages() {
        List<String> languages = repository.getLanguages();

        return languages;
    }

    public User getByEmail(String email) {
        User user = repository.findByEmail(email);

        return user;
    }

    public User create(User user) {
        return repository.save(user);
    }

    public List<String> getStates() {
        return repository.getStates();
    }

    public List<String> getTowns() {
        return repository.getTowns();
    }
}
