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
//    @Property("verification") private boolean verification;
//    @Property("admin_approve") private boolean adminApprove;


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
}
