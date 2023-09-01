package com.Cranco.Cranco.VehiclProfile;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

import java.time.LocalDate;
import java.util.Set;

@Node("VEHICLEPROFILE")
public class VehicleProfile {
    @Id
    @GeneratedValue
    private Long id;
    @Property("vehicle_name")
    private String vehicleName;
    @Property("prev_owners")
    private String prevOwners;
    @Property("gov_reg_no")
    private String govRegNo;
    @Property("vehicle_brand")
    private String vehicleBrand;
    @Property("vehicle_model")
    private String vehicleModel;
    @Property("visibility")
    private boolean visibility;
    @Property("ownership")
    private boolean ownership;
    @Property("on_marketplace")
    private boolean onMarketplace;

    public VehicleProfile() {
        this.visibility = false;
        this.ownership = false;
        this.onMarketplace = false;
    }

// getters and setters


    public Long getId() {
        return id;
    }

    public String getPrevOwners() {
        return prevOwners;
    }

    public boolean isOnMarketplace() {
        return onMarketplace;
    }

    public boolean isOwnership() {
        return ownership;
    }

    public boolean isVisibility() {
        return visibility;
    }

    public String getVehicleBrand() {
        return vehicleBrand;
    }

    public String getVehicleModel() {
        return vehicleModel;
    }

    public String getVehicleName() {
        return vehicleName;
    }

    public String getGovRegNo() {
        return govRegNo;
    }

    public void setGovRegNo(String govRegNo) {
        this.govRegNo = govRegNo;
    }

    public void setOnMarketplace(boolean onMarketplace) {
        this.onMarketplace = onMarketplace;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setOwnership(boolean ownership) {
        this.ownership = ownership;
    }

    public void setVehicleBrand(String vehicleBrand) {
        this.vehicleBrand = vehicleBrand;
    }

    public void setVehicleModel(String vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    public void setVehicleName(String vehicleName) {
        this.vehicleName = vehicleName;
    }

    public void setPrevOwners(String prevOwners) {
        this.prevOwners = prevOwners;
    }

    public void setVisibility(boolean visibility) {
        this.visibility = visibility;
    }


}
