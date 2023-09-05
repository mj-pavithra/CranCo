package com.Cranco.Cranco.Notification;


import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

@Node("NOTIFICATION")
public class Notification {

    @Id
    @GeneratedValue
    @Property("id")
    private Integer id;

    @Property("date")
    private Date date;

    @Property("details")
    private String details;

    @Property("seen")
    private Boolean seen;

    @Property("clicked")
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
