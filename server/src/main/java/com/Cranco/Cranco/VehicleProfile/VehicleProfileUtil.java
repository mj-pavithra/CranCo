package com.Cranco.Cranco.VehicleProfile;

import org.springframework.stereotype.Component;

@Component
public class VehicleProfileUtil {
    public VehicleProfile toVehicleProfile(VehicleProfileDto vehicleProfileDto) {
        VehicleProfile vehicleProfile = new VehicleProfile();
        vehicleProfile.setVehicleType(vehicleProfileDto.getVehicleType());
        vehicleProfile.setVehicleManufacturer(vehicleProfileDto.getVehicleManufacturer());
        vehicleProfile.setVehicleModel(vehicleProfileDto.getVehicleModel());
        vehicleProfile.setVehicleManuYear(vehicleProfileDto.getVehicleManuYear());
        vehicleProfile.setVehicleRegNo(vehicleProfileDto.getVehicleRegNo());
        vehicleProfile.setVehicleFuelType(vehicleProfileDto.getVehicleType());
        vehicleProfile.setVehicleEngineType(vehicleProfileDto.getVehicleEngineType());
        vehicleProfile.setVehicleTransmission(vehicleProfileDto.getVehicleTransmission());
        vehicleProfile.setVehicleDriveTrain(vehicleProfileDto.getVehicleDriveTrain());
        vehicleProfile.setVehicleBodyStyle(vehicleProfileDto.getVehicleBodyStyle());
        vehicleProfile.setVehicleColor(vehicleProfileDto.getVehicleColor());
        vehicleProfile.setVehicleSeatingCapacity(vehicleProfileDto.getVehicleSeatingCapacity());
        vehicleProfile.setVehicleExtStructure(vehicleProfileDto.getVehicleExtStructure());
        vehicleProfile.setVehicleIntMaterial(vehicleProfileDto.getVehicleIntMaterial());
        vehicleProfile.setVehicleIntMaterial(vehicleProfileDto.getVehicleIntMaterial());
        vehicleProfile.setVehicleIntColor(vehicleProfileDto.getVehicleIntColor());
        vehicleProfile.setVehicleInfoSys(vehicleProfileDto.getVehicleInfoSys());
        vehicleProfile.setVehicleSafetyFeat(vehicleProfileDto.getVehicleSafetyFeat());
        vehicleProfile.setVehicleSusType(vehicleProfileDto.getVehicleSusType());
        vehicleProfile.setVehicleWheels(vehicleProfileDto.getVehicleWheels());
        vehicleProfile.setVehicleTireType(vehicleProfileDto.getVehicleTireType());
        vehicleProfile.setVehicleFuelEffi(vehicleProfileDto.getVehicleFuelEffi());
        vehicleProfile.setVehicleTorque(vehicleProfileDto.getVehicleTorque());
        vehicleProfile.setVehicleAccel(vehicleProfileDto.getVehicleAccel());
        vehicleProfile.setVehicleTopSpeed(vehicleProfileDto.getVehicleTopSpeed());
        vehicleProfile.setVehicleCargoCapacity(vehicleProfileDto.getVehicleCargoCapacity());
        vehicleProfile.setVehicleTowingCapacity(vehicleProfileDto.getVehicleTowingCapacity());


        return vehicleProfile;
    }

    public void validateVehicleProfile(VehicleProfileDto vehicleProfileDto) {
        if (vehicleProfileDto.getVehicleBodyStyle() == null || vehicleProfileDto.getVehicleBodyStyle().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleTransmission() == null || vehicleProfileDto.getVehicleTransmission().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleManuYear() == null || vehicleProfileDto.getVehicleManuYear().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleModel() == null || vehicleProfileDto.getVehicleModel().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleRegNo() == null || vehicleProfileDto.getVehicleRegNo().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleFuelType() == null || vehicleProfileDto.getVehicleFuelType().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleEngineType() == null || vehicleProfileDto.getVehicleEngineType().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleDriveTrain() == null || vehicleProfileDto.getVehicleDriveTrain().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleColor() == null || vehicleProfileDto.getVehicleColor().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleSeatingCapacity() == null || vehicleProfileDto.getVehicleSeatingCapacity().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleExtStructure() == null || vehicleProfileDto.getVehicleExtStructure().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleIntMaterial() == null || vehicleProfileDto.getVehicleIntMaterial().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleIntColor() == null || vehicleProfileDto.getVehicleIntColor().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleInfoSys() == null || vehicleProfileDto.getVehicleInfoSys().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleSafetyFeat() == null || vehicleProfileDto.getVehicleSafetyFeat().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleSusType() == null || vehicleProfileDto.getVehicleSusType().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleWheels() == null || vehicleProfileDto.getVehicleWheels().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleTireType() == null || vehicleProfileDto.getVehicleTireType().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleFuelEffi() == null || vehicleProfileDto.getVehicleFuelEffi().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleTorque() == null || vehicleProfileDto.getVehicleTorque().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleAccel() == null || vehicleProfileDto.getVehicleAccel().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleTopSpeed() == null || vehicleProfileDto.getVehicleTopSpeed().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleCargoCapacity() == null || vehicleProfileDto.getVehicleCargoCapacity().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
        if (vehicleProfileDto.getVehicleTowingCapacity() == null || vehicleProfileDto.getVehicleTowingCapacity().isEmpty()) {
            throw new IllegalStateException("This field cannot be empty.");
        }
    }
}
