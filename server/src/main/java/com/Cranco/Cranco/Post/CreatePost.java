package com.Cranco.Cranco.Post;

import java.util.List;
public class CreatePost {
    private String postId;
    private Long userId;
    private List<Image> images;
    private String caption;
    private String username;
    private List<String> imageURL ;
    public int likedCount;

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

class React{
    private Long userID;
    private String Liked;
    private Long postID;
    private String PostOwner;


    public Long getUserID() {
        return userID;
    }

    public String getLiked() {
        return Liked;
    }

    public Long getPostID() {
        return postID;
    }
    public String getPostOwner() {
        return PostOwner;
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

class WriteCommnet{
    private Long postID;
    private String commnetText;
    private Long userID;
    private Long commnetID;

    public Long getPostID() {
        return postID;
    }

    public String getCommnetText(String comment) {
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
}
