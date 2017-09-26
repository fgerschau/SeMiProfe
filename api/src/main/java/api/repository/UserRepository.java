package api.repository;

import api.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    Page<User> findByFirstNameOrLastNameIgnoreCaseContaining(String firstName, String lastName, Pageable pageable);
    Page<User> findAll(Pageable pageable);
}
