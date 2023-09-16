package com.Cranco.Cranco.Profile;

public class ProfileDTO {
    private long id;
    private String username;
    private String bio;
    private String email;
    private String phone;
    private String address;
    private String city;
    private String state;
    public ProfileDTO() {}
    public ProfileDTO(long id, String username, String bio, String email, String phone, String address, String city, String state) {
        this.id=id;
        this.username=username;
        this.bio=bio;
        this.email=email;
        this.phone=phone;
        this.address=address;
        this.city=city;
        this.state=state;
    }

    public long getId() { return id; }
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
    public String getstate() { return state; }
    public void setstate(String state) { this.state = state; }
}
