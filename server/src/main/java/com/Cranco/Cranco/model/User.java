package com.Cranco.Cranco.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Node("User") // Node label for the Neo4j node
public class User {
    @Id
    @GeneratedValue // Generates a unique identifier for the node
    private int userId;

    private String username;
    private Date dob;
    //@Email(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")
    private String email;
    //@Pattern(regexp = "^94[0-9]{9}$")
    private String phonenumber;
    //@Pattern(regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$")
    private String password;
}
