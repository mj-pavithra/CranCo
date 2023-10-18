package com.Cranco.Cranco.BusinessProfile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BusinessProfileDto {
    private Long id;
    private String businessName;
    private String businessType;
    private String businessEmail;
    private String phoneNumber;
    private boolean verification;
    private boolean ownerVisibility;

    public void setId(Long id) {
        this.id = id;
    }

    public void setVerification(boolean verification) {
        this.verification = verification;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setOwnerVisibility(boolean ownerVisibility) {
        this.ownerVisibility = ownerVisibility;
    }

    public void setBusinessType(String businessType) {
        this.businessType = businessType;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public void setBusinessEmail(String businessEmail) {
        this.businessEmail = businessEmail;
    }

    public Long getId() {
        return id;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getBusinessType() {
        return businessType;
    }

    public String getBusinessEmail() {
        return businessEmail;
    }

    public String getBusinessName() {
        return businessName;
    }
}
