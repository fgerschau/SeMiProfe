package api;

import api.teacher.Teacher;
import api.teacher.support.TeacherRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class Application {
	private static final Logger log = LoggerFactory.getLogger(Application.class);

  	public static void main(String[] args) {
		SpringApplication.run(Application.class);
	}


  	@Bean
	public CommandLineRunner demo(TeacherRepository repository) {
		return (args) -> {
			repository.save(new Teacher("Jack", "Bauer"));
			repository.save(new Teacher("Chloe", "O'Brian"));
			repository.save(new Teacher("Kim", "Bauer"));
			repository.save(new Teacher("David", "Palmer"));
			repository.save(new Teacher("Michelle", "Dessler"));

			// fetch all teachers
			log.info("Teachers found with findAll():");
			log.info("-------------------------------");
			for (Teacher teacher : repository.findAll()) {
				log.info(teacher.toString());
			}
			log.info("");

			// fetch an individual teacher by ID
			Teacher teacher = repository.findOne(1L);
			log.info("Teacher found with findOne(1L):");
			log.info("--------------------------------");
			log.info(teacher.toString());
			log.info("");

			// fetch teachers by last name
			log.info("Teacher found with findByLastName('Bauer'):");
			log.info("--------------------------------------------");
			for (Teacher bauer : repository.findByLastName("Bauer")) {
				log.info(bauer.toString());
			}
			log.info("");
		};
	}
}
