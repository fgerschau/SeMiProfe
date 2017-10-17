package api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
  
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private Boolean isTeacher;
    private String language;

    protected User() {}

    public User(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
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

    public Boolean getIsTeacher() {
        return isTeacher;
    }

    public String getLanguage() {
        return language;
    }
}
