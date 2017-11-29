package api.repository;

import api.model.Review;
import api.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u " +
            "WHERE u.isTeacher = ?1 " +
            "AND (" +
                "LOWER(u.firstName) LIKE LOWER(CONCAT('%', ?2, '%')) " +
                "OR LOWER(u.lastName) LIKE LOWER(CONCAT('%', ?3, '%')) " +
            ") AND LOWER(u.language) LIKE LOWER(CONCAT('%', ?4, '%')) " +
            "AND (" +
                "?5 IS NULL " +
                "OR LOWER(u.town) LIKE LOWER(CONCAT('%', ?5, '%'))" +
            ") AND (" +
                "?6 IS NULL " +
                "OR LOWER(u.state) LIKE LOWER(CONCAT('%', ?6, '%'))" +
            ") ORDER BY u.firstName")
    Page<User> findAll(Boolean isTeacher, String firstName, String lastName, String language, String town, String state, Pageable pageable);

    @Query("SELECT u FROM User u " +
            "WHERE u.isTeacher = ?1 " +
            "AND (" +
                "LOWER(u.firstName) LIKE LOWER(CONCAT('%', ?2, '%')) " +
                "OR LOWER(u.lastName) LIKE LOWER(CONCAT('%', ?3, '%')) " +
            ") AND LOWER(u.language) LIKE LOWER(CONCAT('%', ?4, '%')) " +
            "AND (" +
                "?5 IS NULL " +
                "OR LOWER(u.town) LIKE LOWER(CONCAT('%', ?5, '%'))" +
            ") AND (" +
                "?6 IS NULL " +
                "OR LOWER(u.state) LIKE LOWER(CONCAT('%', ?6, '%'))" +
            ") AND u.id IN ?7 " +
            "ORDER BY u.firstName")
    Page<User> findAllByIdsAndQuery(Boolean isTeacher, String firstName, String lastName, String language, String town, String state, List<Long> userIds, Pageable pageable);

    @Query("SELECT DISTINCT(u.language) FROM User u")
    List<String> getLanguages();

    User findByEmail(String email);

    User save(User user);

    List<User> findByCefrLevels_levelIn(Iterable<Integer> level);

    @Query("SELECT DISTINCT(u.state) FROM User u")
    List<String> getStates();

    @Query("SELECT DISTINCT(u.town) FROM User u")
    List<String> getTowns();

    User findById(Long id);
}
