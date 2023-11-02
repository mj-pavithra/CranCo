package com.Cranco.Cranco.Soul;

public class SoulRequest {
    private String vehicleProfileName;
    private String vehicleType;
    private String vehicleManufacturer;
    private String vehicleManuYear;
    private String vehicleRegNo;

    public String getVehicleProfileName() {
        return vehicleProfileName;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public String getVehicleManufacturer() {
        return vehicleManufacturer;
    }

    public String getVehicleManuYear() {
        return vehicleManuYear;
    }

    public String getVehicleRegNo() {
        return vehicleRegNo;
    }

    public void setVehicleProfileName(String vehicleProfileName) {
        this.vehicleProfileName = vehicleProfileName;
    }

    public void setVehicleManuYear(String vehicleManuYear) {
        this.vehicleManuYear = vehicleManuYear;
    }

    public void setVehicleRegNo(String vehicleRegNo) {
        this.vehicleRegNo = vehicleRegNo;
    }

    public void setVehicleManufacturer(String vehicleManufacturer) {
        this.vehicleManufacturer = vehicleManufacturer;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }
}
