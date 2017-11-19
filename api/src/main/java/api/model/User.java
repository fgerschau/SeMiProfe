package api.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class User {
    private Long id;
    private String firstName;
    private String lastName;
    private Boolean isTeacher;
    private String language;
    private String email;
    private String password;
    private int phone;
    private String province;
    private String town;
    private Set<CEFRLevel> cefrLevels;

    protected User() {}

    public User(String firstName, String lastName, Set<CEFRLevel> cefrLevels) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cefrLevels = cefrLevels;
    }

    @Override
    public String toString() {
        return String.format("User[id=%d, firstName='%s', lastName='%s']", id, firstName, lastName);
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	public Long getId() {
		return id;
	}

    public void setId(Long id) {
        this.id = id;
    }

    @Column(nullable = false)
    public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Column(nullable = false)
    public String getLastName() {
		return lastName;
	}

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Column(nullable = false)
    public Boolean getIsTeacher() {
        return isTeacher;
    }

    public void setIsTeacher(Boolean isTeacher) {
        this.isTeacher = isTeacher;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    @Column(nullable = false, unique = true)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(nullable = false)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    @Column(nullable = false)
    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }


    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_CEFRLevel", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "cefrlevel_id", referencedColumnName = "id"))
    public Set<CEFRLevel> getCefrLevels() {
        return cefrLevels;
    }

    public void setCefrLevels(Set<CEFRLevel> cefrLevels) {
        this.cefrLevels = cefrLevels;
    }
}

