package api.teacher.support;

import api.teacher.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TeacherController {
    @Autowired TeacherRepository repository;

    @RequestMapping("/teacher")
     public List<Teacher> get(
             @RequestParam(value="last-name", required=false) String lastName) {
        List<Teacher> teachers;
        if (lastName != null && lastName.length() > 0) {
            teachers = repository.findByLastName(lastName);
        } else {
            teachers = repository.findAll();
        }

        return teachers;
    }
}
