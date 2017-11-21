package api.repository;

import api.model.Achievement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface AchievementRepository extends JpaRepository<Achievement, Long> {
    List<Achievement> findAll();

    @Query("SELECT a FROM Achievement a WHERE id IN ?1")
    Set<Achievement> getAll(Set<Integer> ids);
}
