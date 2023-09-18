package com.Cranco.Cranco.Post;

import java.util.List;
import java.time.LocalDateTime;

public class PostDto {
    private long postId;
    private String username;
    private String caption;
    private String location;
    private List<String> imageLocations;// Add this field for image locations
    private List<byte[]> images;
    private Long userID;
    private LocalDateTime date;

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

    public List<String> getImageLocations() {
        return imageLocations; // Add this getter method for image locations
    }
    public List<byte[]> getImages() { // Modify this getter method for images
        return images;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public Long getUserID() {
        return userID;
    }

    public void setId(Long postId) {
        this.postId = postId;
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

    public void setImages(List<byte[]> images) { // Modify this setter method for images
        this.images = images;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}






