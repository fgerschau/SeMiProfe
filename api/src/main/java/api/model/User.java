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
    private Integer phone;
    private String state;
    private String town;
    private Integer level;
    private Set<Review> receivedReviews;
    private Set<Review> givenReviews;
    private Set<CEFRLevel> cefrLevels;
    private Set<Achievement> achievements;
    private Double price;

    protected User() {}

    public User(String firstName, String lastName, Set<CEFRLevel> cefrLevels) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cefrLevels = cefrLevels;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", isTeacher=" + isTeacher +
                ", language='" + language + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phone=" + phone +
                ", state='" + state + '\'' +
                ", town='" + town + '\'' +
                ", level=" + level +
                ", receivedReviews=" + receivedReviews +
                ", givenReviews=" + givenReviews +
                ", cefrLevels=" + cefrLevels +
                ", achievements=" + achievements +
                ", price=" + price +
                '}';
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

    @Column(nullable = true)
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

    @Column(nullable = true)
    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    @Column(nullable = false)
    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Column(nullable = true)
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

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_achievement", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "achievement_id", referencedColumnName = "id"))
    public Set<Achievement> getAchievements() {
        return achievements;
    }

    public void setAchievements(Set<Achievement> achievements) {
        this.achievements = achievements;
    }

    @OneToMany(mappedBy = "receiver", cascade = CascadeType.ALL)
    public Set<Review> getReceivedReviews() {
        return receivedReviews;
    }

    public void setReceivedReviews(Set<Review> receivedReviews) {
        this.receivedReviews = receivedReviews;
    }

    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    public Set<Review> getGivenReviews() {
        return givenReviews;
    }

    public void setGivenReviews(Set<Review> givenReviews) {
        this.givenReviews = givenReviews;
    }

    @Column(nullable = true)
    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
