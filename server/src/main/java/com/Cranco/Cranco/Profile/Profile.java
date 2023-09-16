package com.Cranco.Cranco.Profile;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

@Node("profile")
public class Profile {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String bio;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String state;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getusername() { return username; }
    public void setusername(String username) { this.username = username; }
    public String getphone() { return phone; }
    public void setphone(String phone) { this.phone = phone; }
    public String getbio() { return bio; }
    public void setbio(String bio) { this.bio = bio; }
    public String getaddress() { return address;}
    public void setaddress(String address) { this.address = address; }
    public String getemail() { return email;}
    public void setemail(String email) { this.email = email; }
    public String getcity() { return city; }
    public void setcity(String city) { this.city = city; }
    public Object getstate() { return state; }
    public void setstate(String state) { this.state = state; }
}
