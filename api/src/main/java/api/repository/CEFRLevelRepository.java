package api.repository;


import api.model.CEFRLevel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CEFRLevelRepository extends JpaRepository<CEFRLevel, Long> {
    CEFRLevel findByLevel(Integer level);
}
