package api.service;

import api.model.Review;
import api.model.User;
import api.repository.ReviewRepository;
import api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service("ReviewService")
public class ReviewService {
    @Autowired
    ReviewRepository repository;
    @Autowired
    UserService userService;

    public Review save(Long userId, Long authorId, Integer stars, String comment) {
        User user = userService.getById(userId);
        User author = userService.getById(authorId);
        if (user == null || author == null || stars == null) {
            return null;
        }

        Review review = new Review(user, author, stars, comment, author.getFirstName() + " " + author.getLastName());

        return repository.save(review);
    }

    public Review getOne(Long reviewId) {
        return repository.findOneById(reviewId);
    }
}
