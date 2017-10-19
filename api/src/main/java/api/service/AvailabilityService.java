package api.service;
import api.model.Availability;
import api.repository.AvailabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service("AvailabilityService")
public class AvailabilityService {
    @Autowired
    AvailabilityRepository repository;
    public Availability get(long id){
        Optional<Availability> availability = repository.findById(id);
        return availability.get();
    }
    public Availability save(Availability a){
        return repository.save(a);
    }
}