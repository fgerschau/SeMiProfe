package api.controller;

import api.model.Achievement;
import api.model.User;
import api.service.AchievementService;
import api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
public class AchievementController {
    @Autowired
    AchievementService service;

    @RequestMapping(value = "/achievements", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
     public List<Achievement> get() {

        List<Achievement> achievements = service.get();

        return achievements;
    }
}
