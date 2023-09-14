package com.Cranco.Cranco.VehiclProfile;

public class VehicleProfileDto {

    private Long id;
    private String vehicleProfileName;
    private String vehicleName;
    private String vehicleBrand;
    private String vehicleModel;
    private String prevOwners;
    private String govRegNo;
    private boolean visibility;
    private boolean ownership;
    private boolean onMarketPlace;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getVehicleProfileName() {
        return vehicleProfileName;
    }
    public void setVehicleProfileName(String vehicleProfileName) {
        this.vehicleProfileName = vehicleProfileName;
    }

    public String getVehicleBrand() {
        return vehicleBrand;
    }

    public void setVehicleBrand(String vehicleBrand) {
        this.vehicleBrand = vehicleBrand;
    }

    public String getVehicleModel() {
        return vehicleModel;
    }

    public void setVehicleModel(String vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    public String getVehicleName() {
        return vehicleName;
    }

    public void setVehicleName(String vehicleName) {
        this.vehicleName = vehicleName;
    }

    public String getPrevOwners() {
        return prevOwners;
    }

    public void setPrevOwners(String prevOwners) {
        this.prevOwners = prevOwners;
    }

    public String getGovRegNo() {
        return govRegNo;
    }

    public void setGovRegNo(String govRegNo) {
        this.govRegNo = govRegNo;
    }

    public boolean isVisibility() {
        return visibility;
    }

    public boolean isOwnership() {
        return ownership;
    }

    public boolean isOnMarketPlace() {
        return onMarketPlace;
    }

    public void setVisibility(boolean visibility) {
        this.visibility = visibility;
    }

    public void setOwnership(boolean ownership) {
        this.ownership = ownership;
    }

    public void setOnMarketPlace(boolean onMarketPlace) {
        this.onMarketPlace = onMarketPlace;
    }

}

