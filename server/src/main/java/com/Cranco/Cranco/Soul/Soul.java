package com.Cranco.Cranco.Soul;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

@Node("SOUL")
public class Soul {
    @Id @GeneratedValue private Long soulId;
    @Property("vehicleProfileName") private String vehicleProfileName;
    @Property("vehicleType") private String vehicleType;
    @Property("vehicleManufacturer") private String vehicleManufacturer;
    @Property("vehicleManuYear") private String vehicleManuYear;
    @Property("vehicleRegNo") private String vehicleRegNo;

    public String getVehicleType() {
        return vehicleType;
    }

    public String getVehicleManufacturer() {
        return vehicleManufacturer;
    }

    public String getVehicleRegNo() {
        return vehicleRegNo;
    }

    public String getVehicleManuYear() {
        return vehicleManuYear;
    }

    public String getVehicleProfileName() {
        return vehicleProfileName;
    }

    public Long getSoulId() {
        return soulId;
    }

    public void setVehicleProfileName(String vehicleProfileName) {
        this.vehicleProfileName = vehicleProfileName;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public void setVehicleRegNo(String vehicleRegNo) {
        this.vehicleRegNo = vehicleRegNo;
    }

    public void setVehicleManuYear(String vehicleManuYear) {
        this.vehicleManuYear = vehicleManuYear;
    }

    public void setVehicleManufacturer(String vehicleManufacturer) {
        this.vehicleManufacturer = vehicleManufacturer;
    }

    public void setSoulId(Long soulId) {
        this.soulId = soulId;
    }
}
