package api.user.support;

import api.user.User;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByFirstNameOrLastName(String firstName, String lastName);
    List<User> findAll();
}
