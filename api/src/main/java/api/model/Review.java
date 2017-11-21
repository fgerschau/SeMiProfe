package api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Review {


    private Long id;

    private int valoration;
    private String comment;

    private  User user;
    private  User reviewer;
    private String reviewerName;
    //private Long reviewerId;
    //private Long reviewedId;

    protected Review() {}

    public Review(int valoration, String comment,User user, User reviewer) {
        this.valoration = valoration;
        this.comment = comment;
        this.user = user;
        this.reviewer = reviewer;
        this.reviewerName = reviewer.getFirstName();
        //this.reviewedId = reviewedId;
        //this.reviewerId = reviewerId;
    }

    @Override
    public String toString() {
        return String.format("User[id=%d, valoration='%s', comment='%s']", id, valoration, comment);
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getValoration() {
        return valoration;
    }

    public void setValoration(int valoration){
        this.valoration = valoration;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment){
        this.comment = comment;
    }

    /*public Long getReviewedId() {
        return reviewedId;
    }

    public  void setReviewedID(Long reviewedID ){ this.reviewedId = reviewedId; }

    public Long getReviewerId() {
        return reviewerId;
    }

    public  void setReviewerId(Long reviewerID ){ this.reviewerId = reviewerID; }*/

    @ManyToOne
    @JsonIgnore
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @ManyToOne
    @JsonIgnore
    public User getReviewer() {
        return reviewer;
    }

    public void setReviewer(User reviewer) {
        this.reviewer = reviewer;
    }

    public String getReviewerName() {
        return reviewerName;
    }

    public void setReviewerName(String reviewerName) {
        this.reviewerName = reviewerName;
    }
}
