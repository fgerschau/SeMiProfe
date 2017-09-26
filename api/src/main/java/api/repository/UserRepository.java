package api.repository;

import api.model.User;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByFirstNameOrLastName(String firstName, String lastName);
    List<User> findAll();
}
