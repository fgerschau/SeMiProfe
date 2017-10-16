package api.repository;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.oracle.javafx.jmx.json.JSONReader;
import api.model.Availability;
import org.springframework.data.repository.Repository;
import java.util.Optional;

public interface AvailabilityRepository extends Repository<Availability,Long>{
    Optional<Availability> findById(Long primaryKey);
    Availability save (Availability entity);
}