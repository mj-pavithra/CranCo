package com.Cranco.Cranco.BusinessProfile;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class CreateBusinessProfileRequest {
    @NotEmpty
    private String businessName;
    @NotEmpty
    private String businessType;
    @NotEmpty
    @Email(message = "Enter a valid email")
    private String businessEmail;

    @NotEmpty
    @Size(max = 10, min = 10)
    private String phoneNumber;

    @NotEmpty
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
