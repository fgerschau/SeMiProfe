package api.controller;

import api.model.Achievement;
import api.model.Review;
import api.model.User;
import api.service.AchievementService;
import api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Set;

@RestController
public class UserController {
    @Autowired
    UserService userService;
    AchievementService achievementService;

    @RequestMapping(value = "/user", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
     public Page<User> get(@RequestParam(value="search", required = false) String search,
                           @RequestParam(value="teacher", required = false, defaultValue = "true") Boolean isTeacher,
                           @RequestParam(value="language", required = false) String language,
                           @RequestParam(value="cefrlevels", required = false) Set<Integer> cefrLevels,
                           @RequestParam(value="town", required = false) String town,
                           @RequestParam(value="state", required = false) String state,
                           Pageable pageable) {

        language = language == null ? "" : language;

        Page<User> users = userService.get(isTeacher, search, language, cefrLevels, town, state, pageable);

        return users;
    }

    @RequestMapping(value="/languages")
    public List<String> getLanguages() {
        List<String> languages = userService.getLanguages();

        return languages;
    }

    @RequestMapping(value="/user/email")
    public User getByEmail(@RequestParam(value="email") String email) {

        User user = userService.getByEmail(email);

        return user;
    }

    @RequestMapping(value="/user", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public User create(@RequestBody User user, @RequestParam(value="achievementids", required = false) Set<Integer> achievementIds) {
        System.out.println(achievementIds);
        if (achievementIds != null && achievementIds.size() > 0) {
            Set<Achievement> achievements = achievementService.getByIds(achievementIds);
            if (achievements.size() > 0) {
                System.out.println(achievements);
                user.setAchievements(achievements);
            }
        }

        return userService.create(user);
    }

    @RequestMapping(value="/states", method = RequestMethod.GET)
    public List<String> getStates() {
        List<String> communities = userService.getStates();

        return communities;
    }

    @RequestMapping(value="/towns", method = RequestMethod.GET)
    public List<String> getTowns() {
        List<String> towns = userService.getTowns();

        return towns;
    }


}
