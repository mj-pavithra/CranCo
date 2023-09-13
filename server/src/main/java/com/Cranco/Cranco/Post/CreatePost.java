package com.Cranco.Cranco.Post;

import java.util.List;
public class CreatePost {
    private String postId;
    private String userId;
    private List<Image> images;
    private String caption;
    private List<String> imageURL ;

    public String getPostId() {
        return postId;
    }

    public String getUserId() {
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

    public void setUserId(String userId) {
        this.userId = userId;
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


    public Long getUserID() {
        return userID;
    }

    public String getLiked() {
        return Liked;
    }

    public Long getPostID() {
        return postID;
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
}
