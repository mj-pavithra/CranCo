package com.Cranco.Cranco.Notification;


import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

@Node("NOTIFICATION")

public class Notification {

    @Property("date")
    private Date date;

    @Property("details")
    private String details;

    @Property("seen")
    private Boolean seen;

    @Property("clicked")
    private Boolean click;


}
