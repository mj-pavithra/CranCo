package com.Cranco.Cranco.BusinessProfile;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

import java.time.LocalDate;
import java.util.Set;

@Node("BUSINESSPROFILE")
public class BusinessProfile {
    @Id
    @GeneratedValue
    private Long id;
    @Property("business_name")
    private String businessName;
    @Property("business_type")
    private String businessType;
    @Property("business_email")
    private String businessEmail;
    @Property("phone_number")
    private String phoneNumber;
    @Property("verification")
    private boolean verification;
    @Property("owner_visibility")
    private boolean ownerVisibility;

    public BusinessProfile() {
        this.verification = false;
        this.ownerVisibility = false;
    }

// getters and setters
    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public boolean isOwnerVisibility() {
        return ownerVisibility;
    }

    public String getBusinessEmail() {
        return businessEmail;
    }

    public String getBusinessName() {
        return businessName;
    }

    public String getBusinessType() {
        return businessType;
    }

    public boolean isVerification() {
        return verification;
    }

    public void setBusinessEmail(String businessEmail) {
        this.businessEmail = businessEmail;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public void setBusinessType(String businessType) {
        this.businessType = businessType;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setOwnerVisibility(boolean ownerVisibility) {
        this.ownerVisibility = ownerVisibility;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setVerification(boolean verification) {
        this.verification = verification;
    }
}
