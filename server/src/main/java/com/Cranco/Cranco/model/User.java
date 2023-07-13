package com.Cranco.Cranco.model;

import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Relationship;

import java.util.List;

@Node("User")
public class User {
    @Id
    private long id;
    private String name;
    private Integer age;
    @Relationship(type = "RATED", direction = Relationship.Direction.INCOMING)
    private List<Movie> movies;
    public User() {
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }
}