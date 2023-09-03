package com.Cranco.Cranco.Post;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

@Node("POST")
public class Post {
    @Id
    @GeneratedValue
    private Long postId;
    @Property("username")
    private String username;

    @Property("caption")
    private String caption;

    @Property("location")
    private String location;

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
}
