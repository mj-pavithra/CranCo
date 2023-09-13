package com.Cranco.Cranco.Post;

import com.Cranco.Cranco.User.User;
import org.springframework.data.neo4j.core.schema.*;

import java.time.LocalDateTime;


@Node("POST")
public class Post {
    @Id
    @GeneratedValue
    private Long postId;
    @Property("username")
    private String username;

    @Property("caption")
    private String caption;

    @Property("date")
    private LocalDateTime date;

    @Property("location")
    private String location;
    @Relationship(type = "POSTED_BY", direction = Relationship.Direction.OUTGOING)
    private User USER; // Define a relationship to User

    public Long getId() {
        return postId;
    }

    public String getUsername() {
        return username;
    }

    public String getCaption() {
        return caption;
    }

    public String getLocation() {
        return location;
    }
    public LocalDateTime getDate() {
        return date;
    }
    public void setId(Long postId) {
        this.postId = postId;
    }
    public void setUsername(String username) {
        if(username==null){
            this.username ="uberlage achchi";
        }
        else {
            this.username = username;
        }
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public void setLocation(String location) {
        this.location = location;
    }


    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
