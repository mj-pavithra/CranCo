package com.Cranco.Cranco.VehiclProfile;

public class CreateVehicleProfileRequest {
    private String vehicleProfileName;
    private String vehicleName;
    private String prevOwners;
    private String govRegNo;
    private String vehicleBrand;
    private String vehicleModel;
    private boolean visibility;
    private boolean ownership;
    private boolean onMarketplace;

    public boolean isOwnership() {
        return ownership;
    }

    public boolean isVisibility() {
        return visibility;
    }

    public boolean isOnMarketplace() {
        return onMarketplace;
    }

    public String getVehicleProfileName() {
        return vehicleProfileName;
    }

    public String getVehicleName() {
        return vehicleName;
    }

    public String getGovRegNo() {
        return govRegNo;
    }

    public String getPrevOwners() {
        return prevOwners;
    }

    public String getVehicleModel() {
        return vehicleModel;
    }

    public String getVehicleBrand() {
        return vehicleBrand;
    }
}
