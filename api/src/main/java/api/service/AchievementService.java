package api.service;

import api.model.Achievement;
import api.repository.AchievementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service("AchievementService")
public class AchievementService {
    @Autowired
    AchievementRepository repository;

    public List<Achievement> get() {
        return repository.findAll();
    }

    public Set<Achievement> getByIds(Set<Integer> ids) {
        return repository.getAll(ids);
    }
}
