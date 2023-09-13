package com.Cranco.Cranco.User;

import com.Cranco.Cranco.Post.Post;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.neo4j.core.schema.*;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;

import java.util.HashSet;
import java.util.Set;

import java.time.LocalDate;
import java.util.Set;

@Node("USER")
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @Property("user_name")
    private String username;
    @Property("password")
    private String password;
    @Property("email")
    private String email;

    @Relationship(type = "LIKED", direction = Relationship.Direction.OUTGOING)
    private Set<Post> likedPosts = new HashSet<>();

    @Query("MATCH (u:User {id: $userId})-[r:LIKED]->(p:Post {id: $postId}) DELETE r")
    public void unlikes(@Param("userId") Long userId, @Param("postId") Long postId) {

        String cypherQuery = "MATCH (u:User {id: $userId})-[r:LIKED]->(p:Post {id: $postId}) DELETE r";
        neo4jOperations.query(cypherQuery, Map.of("userId", userId, "postId", postId));
    }

//    @Property("mobile_number")
//    private String mobileNumber;
//    @Property("user_verification")
//    private boolean userVerification;
//    @Property("interest_keywords")
//    private Set<String> interest_keywords;
//
//    @Property("registered_date")
//    @CreatedDate
//    private LocalDate registeredDate;
//
//    @Property("last_modified_date")
//    @LastModifiedDate
//    private LocalDate lastModifieddate;
    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

//    public String getMobileNumber() {
//        return mobileNumber;
//    }
//
//    public boolean isUserVerification() {
//        return userVerification;
//    }
//
//    public Set<String> getInterest_keywords() {
//        return interest_keywords;
//    }
//
//    public LocalDate getRegisteredDate() {
//        return registeredDate;
//    }
//
//    public LocalDate getLastModifieddate() {
//        return lastModifieddate;
//    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

//    public void setMobileNumber(String mobileNumber) {
//        this.mobileNumber = mobileNumber;
//    }
//
//    public void setUserVerification(boolean userVerification) {
//        this.userVerification = userVerification;
//    }
//
//    public void setInterest_keywords(Set<String> interest_keywords) {
//        this.interest_keywords = interest_keywords;
//    }
//
//    public void setRegisteredDate(LocalDate registeredDate) {
//        this.registeredDate = registeredDate;
//    }
}
