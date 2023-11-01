package com.Cranco.Cranco.Post;

import java.util.List;
import java.time.LocalDateTime;

public class PostDto {
    private String postId;
    private String username;
    private String caption;
    private String location;
    private List<String> imageLocations;// Add this field for image locations
//    private List<byte[]> images;
    private Long userID;
    private LocalDateTime date;
    private int likeCount;
    private int commentCount;
    private String visibility;
    private String type;

    public int getLikeCount() {
        return likeCount;
    }

    public String getPostId() {
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
//    public List<byte[]> getImages() { // Modify this getter method for images
//        return images;
//    }

    public LocalDateTime getDate() {
        return date;
    }

    public String getType() {
        return type;
    }

    public String getVisibility() {
        return visibility;
    }
    public Long getUserID(Long userByUsername) {
        return userID;
    }

    public int getCommentCount() {
        return commentCount;
    }

    public void setPostId(String postId) {
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
    public void setVisibility(String visibility) {
        this.visibility = visibility;
    }

    public void setType(String type) {
        this.type = type;
    }
//    public void setImages(List<byte[]> images) { // Modify this setter method for images
//        this.images = images;
//    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public void setLikedCount(int likeCount) {
        this.likeCount = likeCount;
    }

    public void setCommentCount(int commentCount) {
        this.commentCount = commentCount;
    }
}






