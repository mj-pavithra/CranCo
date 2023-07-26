package com.Cranco.Cranco.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import javax.persistence.Table;

//@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
//@Table("users")

public class User {
    @Id
    private String username;
    private String password;
}
