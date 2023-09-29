package com.Cranco.Cranco.BusinessProfile;

import org.springframework.data.neo4j.core.schema.Property;

public class CreateBusinessProfileRequest {
    private String businessName;
    private String businessType;
    private String businessEmail;
    private String phoneNumber;
    private boolean verification;
    private boolean ownerVisibility;

    public void BusinessProfile() {
        this.verification = false;
        this.ownerVisibility = false;
    }

    public String getBusinessName() {
        return businessName;
    }

    public String getBusinessEmail() {
        return businessEmail;
    }

    public String getBusinessType() {
        return businessType;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public boolean isVerification() {
        return verification;
    }

    public boolean isOwnerVisibility() {
        return ownerVisibility;
    }
}
