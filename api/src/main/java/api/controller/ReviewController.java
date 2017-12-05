package api.controller;

import api.model.Review;
import api.model.User;
import api.service.ReviewService;
import api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Set;

@RestController
public class ReviewController {
    @Autowired
    ReviewService service;

    @RequestMapping(value="/review", method = RequestMethod.POST)
    public Review addReview(@RequestParam(value = "userId") Long userId,
                            @RequestParam(value = "authorId") Long authorId,
                            @RequestParam(value = "stars") Integer stars,
                            @RequestParam(value = "comment") String comment) {
        return service.save(userId, authorId, stars, comment);
    }
}

