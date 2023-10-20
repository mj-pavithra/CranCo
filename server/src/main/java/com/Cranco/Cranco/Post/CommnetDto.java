package com.Cranco.Cranco.Post;

public class CommnetDto {
    private Long postID;
    private String commnetText;
    private Long userID;
    private Long commnetID;

    public Long getPostID() {
        return postID;
    }

    public String getCommnet() {
        return commnetText;
    }

    public Long getUserID() {
        return userID;
    }

    public void setPostID(Long postID) {
        this.postID = postID;
    }

    public void setCommnet(String commnetText) {
        this.commnetText = commnetText;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }
}
