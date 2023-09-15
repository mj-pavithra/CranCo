package com.Cranco.Cranco.Complaint;

public class ComplaintDTO {
    private Long id;
    private String title;
    private String description;
    private boolean isClosed;
    private boolean isReviewed;

    public ComplaintDTO() {
    }

    public ComplaintDTO(Long id, String title, String description, boolean isClosed, boolean isReviewed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isClosed = isClosed;
        this.isReviewed = isReviewed;
    }

    public String gettitle() {
        return title;
    }

    public String getdescription() {
        return description;
    }

    public long getid() { return id;}

    public void setid(Long id) {
        this.id = id;
    }

    public void settitle(String title) {
        this.title = title;
    }

    public void setdescription(String description) {
        this.description = description;
    }

    public boolean isClosed() {
        return isClosed;
    }

    public void setIsClosed(boolean closed) {
        isClosed = closed;
    }

    public void setIsReviewed(boolean reviewed)
    {
        isReviewed = reviewed;
    }
    public boolean isReviewed() {
        return isReviewed;
    }

    public void setReviewed(boolean reviewed) {
        isReviewed = reviewed;
    }
}
