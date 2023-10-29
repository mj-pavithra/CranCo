package com.Cranco.Cranco.User;

//import com.fasterxml.jackson.databind.annotation.EnumNaming;

import io.micrometer.core.instrument.binder.db.MetricsDSLContext;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.*;
import com.Cranco.Cranco.Notification.Notification;
import org.springframework.data.neo4j.core.schema.*;
import java.util.Collection;
import java.util.List;
import java.util.ArrayList;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Node("USER")
public class User implements UserDetails {
    @Id
    @GeneratedValue
    private Long id;
    @Property("user_name")
    private String username;
    @Property("password")
    private String password;
    @Property("email")
    private String email;
    @Property("profile_picture")
    private String profile_picture;


    @Query("match (u:USER) where id(u)=$userId match (p:POST)where id(p) = $postId create (u)-[r:LIKED]->(p) return r")
    public void likesPost(@Param("userId") Long userId, @Param("postId") Long postId) {

        String cypherQuery = "match (u:USER) where id(u)=$userId match (p:POST {id: $postId}) create (u)-[r:LIKED]->(p) return r";
        System.out.println("like karana part eka nm wada malli");
//        String cypherQuery = "MATCH (u:USER {id: $userId}), (p:POST {id: $postId}) CREATE (u)-[:LIKED]->(p)";
        MetricsDSLContext neo4jTemplate = null;
        neo4jTemplate.query(cypherQuery, Map.of("userId", userId, "postId", postId));
    }
    @Query("match (u:USER) where id(u)=$userId match (p:POST)where id(p) = $postId match (u)-[r:LIKED]->(p) delete r")
    public void unlikes(@Param("userId") Long userId, @Param("postId") Long postId) {

        String cypherQuery = "match (u:USER) where id(u)=$userId match (p:POST)where id(p) = $postId match (u)-[r:LIKED]->(p) delete r";
//        String cypherQuery = "MERGE (u:USER {id: $userId})-[r:LIKED]->(p:POST {id: $postId}) DELETE r";
        System.out.println("dislike ekath wada malli");
        MetricsDSLContext neo4jTemplate = null;
        neo4jTemplate.query(cypherQuery, Map.of("userId", userId, "postId", postId));
    }


    @Property("role")
    private Role role;
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


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {return email;}

    public String getRealUsername(){return username;}
    public String getProfilePicture(){
        return profile_picture;
    }
    public void setProfilePicture(String new_profile_picture){
        this.profile_picture = new_profile_picture;
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

    public void likePost(Long userID, Long postID) {
    }
    @Relationship(type = "SENT_NOTIFICATION")
    private List<Notification> sentNotifications = new ArrayList<>();

    @Relationship(type = "RECEIVED_NOTIFICATION")
    private List<Notification> receivedNotifications = new ArrayList<>();

    public List<Notification> getSentNotifications() {
        return sentNotifications;
    }

    public void setSentNotifications(List<Notification> sentNotifications) {
        this.sentNotifications = sentNotifications;
    }

    public List<Notification> getReceivedNotifications() {
        return receivedNotifications;
    }

    public void setReceivedNotifications(List<Notification> receivedNotifications) {
        this.receivedNotifications = receivedNotifications;
    }

    public boolean isPresent() {
        return true;
    }
}
