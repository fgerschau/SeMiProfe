package api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.awt.Image;



@Entity
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private Image image;

    protected User() {}

    public User(String firstName, String lastName, String _password, String _email)  {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = _password;
        if (checkEmail(_email))
            this.email = _email;
        else System.out.println("Aqui deberia ir un error, pero esta comprobacion se hace en el frontend");
        this.email = _email;

    }

    public boolean checkUserPassword(String _pass){
        if (password.equals(_pass)) {
            return false;
        }
        else {
            return true;
        }
    }
    private boolean checkEmail(String _email){
        String fin = _email.substring(_email.indexOf('@'), _email.length());
        if (fin.length() >= 3) { // At least x.y
            return true;
        }
        return false;

    }


    @Override
    public String toString() {
        return String.format("User[id=%d, firstName='%s', lastName='%s']", id, firstName, lastName);
    }

	public Long getId() {
		return id;
	}
	public String getFirstName() {
		return firstName;
	}
	public String getLastName() {
		return lastName;
	}
    public boolean equals(User u) {
        if (this.email.equals(u.getEmail())){
            return true;
        }
        return false;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}
