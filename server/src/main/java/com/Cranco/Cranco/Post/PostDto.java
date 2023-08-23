package com.Cranco.Cranco.Post;

import java.util.List;

public class PostDto {
    private long id;
    private String username;
    private String caption;
    private String location;
    private List<String> imageLocations; // Add this field for image locations

    public long getId() {
        return id;
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

    public List<String> getImageLocations() {
        return imageLocations; // Add this getter method for image locations
    }

    public void setId(long id) {
        this.id = id;
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
        this.imageLocations = imageLocations; // Add this setter method for image locations
    }
}
