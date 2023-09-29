package com.Cranco.Cranco.BusinessUser;

public class BusinessUserDto {

    private Long id;
    private String businessname;
    private String ownername;
    private String mobilenumber;
    private String email;
    private String address;
    private String bio;

    public Long getId(){
        return id;
    }
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

    public String getAddress(){
        return address;
    }

    public String getBio(){
        return bio;
    }

    public void setId(Long id){
        this.id = id;
    }
    public void setBusinessname(String businessname){
        this.businessname = businessname;
    }

    public void setOwnername(String ownername){
        this.ownername = ownername;
    }

    public void setMobilenumber(String mobilenumber){
        this.mobilenumber = mobilenumber;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setAddress(String address){
        this.address = address;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }
}
