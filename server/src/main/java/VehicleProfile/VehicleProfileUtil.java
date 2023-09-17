package VehicleProfile;

import org.springframework.stereotype.Component;

@Component
public class VehicleProfileUtil {
    public VehicleProfile toVehicleProfile(VehicleProfileDto vehicleProfileDto) {
        VehicleProfile vehicleProfile = new VehicleProfile();
        vehicleProfile.setVehicleType(vehicleProfile.getVehicleType());
        vehicleProfile.setVehicleManufacturer(vehicleProfile.getVehicleManufacturer());
        vehicleProfile.setVehicleModel(vehicleProfile.getVehicleModel());
        vehicleProfile.setVehicleManuYear(vehicleProfile.getVehicleManuYear());
        vehicleProfile.setVehicleRegNo(vehicleProfile.getVehicleRegNo());
        vehicleProfile.setVehicleFuelType(vehicleProfile.getVehicleType());
        vehicleProfile.setVehicleEngineType(vehicleProfile.getVehicleEngineType());
        vehicleProfile.setVehicleTransmission(vehicleProfile.getVehicleTransmission());
        vehicleProfile.setVehicleDriveTrain(vehicleProfile.getVehicleDriveTrain());
        vehicleProfile.setVehicleBodyStyle(vehicleProfile.getVehicleBodyStyle());
        vehicleProfile.setVehicleColor(vehicleProfile.getVehicleColor());
        vehicleProfile.setVehicleSeatingCapacity(vehicleProfile.getVehicleSeatingCapacity());
        vehicleProfile.setVehicleExtStructure(vehicleProfile.getVehicleExtStructure());
        vehicleProfile.setVehicleIntMaterial(vehicleProfile.getVehicleIntMaterial());
        vehicleProfile.setVehicleIntMaterial(vehicleProfile.getVehicleIntMaterial());
        vehicleProfile.setVehicleIntColor(vehicleProfile.getVehicleIntColor());
        vehicleProfile.setVehicleInfoSys(vehicleProfile.getVehicleInfoSys());
        vehicleProfile.setVehicleSafetyFeat(vehicleProfile.getVehicleSafetyFeat());
        vehicleProfile.setVehicleSusType(vehicleProfile.getVehicleSusType());
        vehicleProfile.setVehicleWheels(vehicleProfile.getVehicleWheels());
        vehicleProfile.setVehicleTireType(vehicleProfile.getVehicleTireType());
        vehicleProfile.setVehicleFuelEffi(vehicleProfile.getVehicleFuelEffi());
        vehicleProfile.setVehicleTorque(vehicleProfile.getVehicleTorque());
        vehicleProfile.setVehicleAccel(vehicleProfile.getVehicleAccel());
        vehicleProfile.setVehicleTopSpeed(vehicleProfile.getVehicleTopSpeed());
        vehicleProfile.setVehicleCargoCapacity(vehicleProfile.getVehicleCargoCapacity());
        vehicleProfile.setVehicleTowingCapacity(vehicleProfile.getVehicleTowingCapacity());


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
