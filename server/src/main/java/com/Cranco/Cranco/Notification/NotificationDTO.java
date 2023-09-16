package com.Cranco.Cranco.Notification;

import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Property;

import java.util.Date;

public class NotificationDTO {

    private Integer id;

    private Date date;

    private String details;

    private Boolean seen;
    private Boolean clicked;

    public Integer getId() {
        return id;
    }
    public Date getDate() {
        return date;
    }
    public String getDetails() {
        return details;
    }
    public Boolean getSeen() {
        return seen;
    }
    public Boolean getClicked() {
        return clicked;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public void setSeen(Boolean seen) {
        this.seen = seen;
    }

    public void setClicked(Boolean clicked) {
        this.clicked = clicked;
    }


}
