package com.Cranco.Cranco.Post;
public class ReactDto{
    private Long userID;
    private String liked;
    private Long postID;
    private int likesCount;
    private String PostOwnser;

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

    public int getLikesCount() {
        return likesCount;
    }

    public String getPostOwnser() {
        return PostOwnser;
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

    public void setLikesCount(int likesCount) {
        this.likesCount = likesCount;
    }

}