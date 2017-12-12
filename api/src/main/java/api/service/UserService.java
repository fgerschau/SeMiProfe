package api.service;

import api.model.CEFRLevel;
import api.model.Review;
import api.model.User;
import api.repository.CEFRLevelRepository;
import api.repository.ReviewRepository;
import api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service("UserService")
public class UserService {
    @Autowired
    UserRepository repository;
    @Autowired
    ReviewService reviewService;
    @Autowired
    CEFRLevelRepository cefrLevelRepository;

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

    public User getById(Long id) {
        if (id == null) {
            return null;
        }

        return repository.findById(id);
    }

    public User update(User user) {
        System.out.println(user.getCefrLevels());
        Set<Review> givenReviews = user.getGivenReviews();
        if (givenReviews.size() > 0) {
            Set<Review> newGivenReviews = new HashSet<>();
            for (Review review : givenReviews) {
                Review newReview = reviewService.getOne(review.getId());
                newGivenReviews.add(newReview);
            }

            user.setGivenReviews(newGivenReviews);
        }

        Set<Review> receivedReviews = user.getReceivedReviews();
        if (receivedReviews.size() > 0) {
            Set<Review> newReceivedReviews = new HashSet<>();
            for (Review review : receivedReviews) {
                Review newReview = reviewService.getOne(review.getId());
                newReceivedReviews.add(newReview);
            }

            user.setReceivedReviews(newReceivedReviews);
        }

        Set<CEFRLevel> cefrLevels = user.getCefrLevels();
        if (cefrLevels.size() > 0) {
            Set<CEFRLevel> newCefrLevels = new HashSet<>();
            for (CEFRLevel level : cefrLevels) {
                CEFRLevel newLevel = cefrLevelRepository.findByLevel(level.getLevel());
                newCefrLevels.add(newLevel);
            }

            user.setCefrLevels(newCefrLevels);
        }

        return repository.save(user);
    }
}
