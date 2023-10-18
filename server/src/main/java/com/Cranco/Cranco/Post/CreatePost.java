package com.Cranco.Cranco.Post;

import java.util.List;

public class CreatePost {
    private String postId;
    private String userId;
    private List<Image> images;
    private String caption;

    public String getPostId() {
        return postId;
    }

    public String getUserId() {
        return userId;
    }

    public List<Image> getImages() {
        return images;
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
