package api.repository;

import api.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.isTeacher = ?1 and (LOWER(u.firstName) LIKE LOWER(CONCAT('%', ?2, '%')) or LOWER(u.lastName) LIKE LOWER(CONCAT('%', ?3, '%')) or LOWER(u.language) LIKE LOWER(CONCAT('%', ?4, '%')))")
    Page<User> findAll(Boolean isTeacher, String firstName, String lastName, String language, Pageable pageable);
}
