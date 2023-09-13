package com.Cranco.Cranco.Post;

public class ReactDto{
    private Long userID;
    private String liked;
    private Long postID;
    public ReactDto(Long userID, String liked, Long postID) {
        this.userID = userID;
        this.liked = liked;
        this.postID = postID;
    }
    public Long getUserID() {
        return userID;
    }

    public String getLiked() {
        return liked;
    }

    public Long getPostID() {
        return postID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public void setLiked(String liked) {
        this.liked = liked;
    }

    public void setPostID(Long postID) {
        this.postID = postID;
    }
}