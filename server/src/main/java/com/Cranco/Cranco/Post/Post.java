package com.Cranco.Cranco.Post;

import org.springframework.data.neo4j.core.schema.*;

import java.time.LocalDateTime;


@Node("POST")
public class Post {

    @Id
    @Property
    private Long postId;
    @Property("username")
    private String username;

    @Property("caption")
    private String caption;

    @Property("date")
    private LocalDateTime date;

    @Property("location")
    private String location;
    public Long postOwnerID;
    public int likedCount;


    public Long getId() {
        return postId;
    }

    public String getUsername() {
        return username;
    }

    public Long getPostOwnerID() {
        return postOwnerID;
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

    public int getLikedCount() {
        return likedCount;
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

    public void setPostOwnerID(Long postOwnerID) {
        this.postOwnerID = postOwnerID;
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

    public void setLikedCount(int likedCount) {
        this.likedCount = likedCount;
    }
}
