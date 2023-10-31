package com.Cranco.Cranco.Post;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommnetDto {
    private Long postID;
    private String commentText;
    private Long userID;
    private Long commentID;
    private Long postOwnerID;


    public Long getPostID() {
        return postID;
    }

    public String getCommnet() {
        return commentText;
    }

    public Long getUserID() {
        return userID;
    }

    public String getCommentText() {
        return commentText;
    }

    public Long getCommentID() {
        return commentID;
    }

    public Long getPostOwnerID() {
        return postOwnerID;
    }

    public void setPostID(Long postID) {
        this.postID = postID;
    }

    public void setCommnet(String commnetText) {
        this.commentText = commnetText;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    public void setCommentID(Long commentID) {
        this.commentID = commentID;
    }

    public void setPostOwnerID(Long postOwnerID) {
        this.postOwnerID = postOwnerID;
    }
}
