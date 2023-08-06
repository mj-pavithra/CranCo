package com.Cranco.Cranco.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {
    private static int userId;
    private String firstname;
    private String lastname;
    private String dob;
    private String email;
    private String phonenumber;
    private String password;

    public static int getuserId() {
        return userId;
    }
    public void setName(int userId) { this.userId = userId;}
    public String getiFrstName() { return firstname;}
    public void setFirstName(String firstname) { this.firstname = String.valueOf(firstname);}
    public String getLastName() { return lastname;}
    public void setLastName(String lastname) { this.lastname = String.valueOf(lastname);}
    public String getDob() { return dob;}
    public void setDob(String dob) { this.dob = String.valueOf(dob);}
    public String getEmail() { return email;}
    public void setEmail(String email) { this.email = String.valueOf(email);}
    public String getPhoneNumber() { return phonenumber;}
    public void setPhoneNumber(String phonenumber) { this.phonenumber = String.valueOf(phonenumber);}
    public String getPassword() {
        return password;
    }
    public void setPassword(int password) {
        this.password = String.valueOf(password);
    }
}
