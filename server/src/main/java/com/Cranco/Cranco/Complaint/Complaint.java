package com.Cranco.Cranco.Complaint;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

@Node("complaint")
public class Complaint {
    @Id
    @GeneratedValue

    private Long id;
    private String title;
    private String description;
    private boolean isClosed;
    private boolean isReviewed;

    public Long getid() {
        return id;
    }

    public void setid(Long id) {
        this.id = id;
    }

    public String gettitle() {
        return title;
    }

    public void settitle(String title) {
        this.title = title;
    }

    public String getdescription() {
        return description;
    }

    public void setdescription(String description) {
        this.description = description;
    }

    public boolean isClosed() {
        return isClosed;
    }

    public void setClosed(boolean closed) {
        isClosed = closed;
    }

    public boolean isReviewed() {
        return isReviewed;
    }

    public void setReviewed(boolean reviewed) {
        isReviewed = reviewed;
    }

    public void setIsReviewed(boolean reviewed) {
        isReviewed = reviewed;
    }

    public void setIsClosed(boolean closed) {
        isClosed = closed;
    }

    public void id(long id) {
        this.id=id;
    }
}
