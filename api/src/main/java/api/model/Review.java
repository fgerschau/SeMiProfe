package api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Review {


    private Long id;

    private Integer stars;
    private String comment;
    private User receiver;
    private User author;
    private String authorName;

    protected Review() {}

    public Review(User receiver, User author, Integer stars, String comment, String authorName) {
        this.stars = stars;
        this.comment = comment;
        this.receiver = receiver;
        this.author = author;
        this.authorName = authorName;
    }

    @Override
    public String toString() {
        return String.format("User[id=%d, stars='%s', comment='%s']", id, stars, comment);
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getStars() {
        return stars;
    }

    public void setStars(Integer stars){
        this.stars = stars;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment){
        this.comment = comment;
    }

    @ManyToOne
    @JoinColumn(name = "receiver")
    @JsonIgnore
    public User getReceiver() {
        return receiver;
    }

    public void setReceiver(User receiver) {
        this.receiver = receiver;
    }

    @ManyToOne
    @JoinColumn(name = "author")
    @JsonIgnore
    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
        if (author != null) {
            this.authorName = author.getFirstName() + author.getLastName();
        }
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }
}
