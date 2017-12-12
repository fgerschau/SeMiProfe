package api.repository;

import api.model.Review;
import api.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReviewRepository extends JpaRepository<User, Long> {
    Review save(Review review);

    Review findOneById(Long id);
}
