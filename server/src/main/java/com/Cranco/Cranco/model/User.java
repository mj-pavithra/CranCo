package com.Cranco.Cranco.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.annotation.Validated;

import java.util.Date;
//import javax.validation.constraints.Email;
//import javax.validation.constraints.Pattern;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "users")
@Entity
@Validated
public class User {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    private String firstname;
    private String lastname;
    private Date dob;
    //@Email(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")
    private String email;
    //@Pattern(regexp = "^94[0-9]{9}$")
    private String phonenumber;
    //@Pattern(regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$")
    private String password;
}
