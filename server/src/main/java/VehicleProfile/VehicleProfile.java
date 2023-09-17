package VehicleProfile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Node;


@Node("VEHICLEPROFILE")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VehicleProfile {

    @Id
    @GeneratedValue
    private long vehicleProfileId;
    private long userId;
    private String vehicleProfileName;
    private String vehicleType;
    private String vehicleModel;
    private String vehicleManufacturer;
    private String vehicleManuYear;
    private String vehicleRegNo;
    private String vehicleFuelType;
    private String vehicleEngineType;
    private String vehicleTransmission;
    private String vehicleDriveTrain;
    private String vehicleBodyStyle;
    private String vehicleColor;
    private String vehicleSeatingCapacity;
    private String vehicleExtStructure;
    private String vehicleIntMaterial;
    private String vehicleIntColor;
    private String vehicleInfoSys;
    private String vehicleSafetyFeat;
    private String vehicleSusType;
    private String vehicleWheels;
    private String vehicleTireType;
    private String vehicleFuelEffi;
    private String vehicleTorque;
    private String vehicleAccel;
    private String vehicleTopSpeed;
    private String vehicleCargoCapacity;
    private String vehicleTowingCapacity;
    private String fileName;

}
