package com.Cranco.Cranco.BusinessUser;

public class CreateBusinessUserRequest {

    private String businessname;
    private String ownername;
    private String mobilenumber;
    private String email;

    public String getBusinessname(){
        return businessname;
    }

    public String getOwnername(){
        return ownername;
    }

    public String getMobilenumber(){
        return mobilenumber;
    }

    public String getEmail(){
        return email;
    }
}
