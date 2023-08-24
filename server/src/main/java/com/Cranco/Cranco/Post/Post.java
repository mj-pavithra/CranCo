package com.Cranco.Cranco.Post;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

import java.util.List;

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

    public Long getpostId() {
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

    public void setUsername(String username) {
        this.username = username;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setImageLocations(List<String> imageLocations) {
    }
}
