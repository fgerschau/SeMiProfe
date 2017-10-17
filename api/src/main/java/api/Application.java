package api;

import api.model.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class);

		User user1 = new User("Paco", "Ramirez", "1234", "asd@gmail.com");
		User user2 = new User("Paca", "Ramirez", "1111", "qwe@paco.com");
		User user3 = new User("Pepe", "Lopez", "0000", "asd@gmail.com");
		System.out.print("user4 mal el correo:  ");
		User user4 = new User("Pepe", "Lopez", "0000", "asd@");


		if (user1.equals(user2)) {
			System.out.println("user1 y user2 Son iguales");
		} else System.out.println("user1 y user2 NO Son iguales");

		if (user1.equals(user3)) {
			System.out.println("user1 y user3 Son iguales");
		} else System.out.println("user1 y user3 NO Son iguales");


	}
}
