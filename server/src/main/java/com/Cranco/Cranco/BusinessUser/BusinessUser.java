package com.Cranco.Cranco.BusinessUser;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

@Node("BUSINESSUSER")
public class BusinessUser {

    @Id @GeneratedValue private Long id;
    @Property("business_name") private String businessname;
    @Property("owner_name") private String ownername;
    @Property("mobile_number") private String mobilenumber;
    @Property("email") private String email;
    @Property("address") private String address;
    @Property("bio") private String bio;


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
