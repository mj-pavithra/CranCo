package com.Cranco.Cranco.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {
    private static String userId;
    private String username;
    private String password;

    public static String getuserId() {
        return userId;
    }

    public void setName(String userId) {
        this.userId = userId;
    }

    public String getusername() {
        return username;
    }

    public void setusername(int username) {
        this.username = String.valueOf(username);
    }

    public String getpassword() {
        return password;
    }

    public void setpassword(int password) {
        this.password = String.valueOf(password);
    }

}
