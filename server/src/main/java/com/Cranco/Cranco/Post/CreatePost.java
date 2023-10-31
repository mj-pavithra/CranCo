package com.Cranco.Cranco.Post;

import lombok.Getter;

import java.util.List;
public class CreatePost {
    private String postId;
    private Long userId;
    private List<Image> images;
    private String caption;
    private String username;
    private List<String> imageURL ;
    public int likedCount;
    private String type;
    private String visibility;



    public String getPostId() {
        return postId;
    }
    public String getUsername(){
        return username;
    }

    public Long getUserId() {
        return userId;
    }

    public List<Image> getImages() {
        return images;
    }

    public List<String> getImageURL() {
        return imageURL;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public String getCaption() {
        return caption;
    }
    public String getVisibility() {
        return visibility;
    }

    public String getType() {
        return type;
    }


    public void setCaption(String caption) {
        this.caption = caption;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setLikedCount(int likedCount) {
        this.likedCount = likedCount;
    }

    public void setImageURL(List<String> imageURL) {
        this.imageURL = imageURL;
    }
    public void setVisibility(String visibility) {
        this.visibility = visibility;
    }

    public void setType(String type) {
        this.type = type;
    }
}


class Image {
    private String filename;
    private byte[] data;
    private String extension;

    public String getFilename() {
        return filename;
    }

    public String getExtension() {
        return extension;
    }

    public byte[] getData() {
        return data;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}

@Getter
class React{
    private Long userID;
    private String Liked;
    private Long postID;
    private String PostOwner;
    private String email;
    private String postType;
    private String visibility;

    public String getEmail() {
        return email;
    }

    public void setPostType(String postType) {
        this.postType = postType;
    }

    public void setVisibility(String visibility) {
        this.visibility = visibility;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public void setLiked(String liked) {
        Liked = liked;
    }

    public void setPostID(Long postID) {
        this.postID = postID;
    }


    public void setPostOwner(String postOwner) {
        PostOwner = postOwner;
    }

}

class Commnet{
    private Long postID;
    private String commnetText;
    private Long userID;
    private Long commnetID;

    public Long getPostID() {
        return postID;
    }

    public String getCommnetText() {
        return commnetText;
    }

    public Long getUserID() {
        return userID;
    }


    public void setPostID(Long postID) {
        this.postID = postID;
    }

    public void setCommnetText(String commnetText) {
        this.commnetText = commnetText;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public void setPostOwnerID(Long postOwnerID) {
    }
}
