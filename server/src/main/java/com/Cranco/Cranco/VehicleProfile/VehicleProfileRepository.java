package com.Cranco.Cranco.VehicleProfile;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleProfileRepository extends Neo4jRepository<VehicleProfile, Long> {
    // Find vehicle profile by its name
    VehicleProfile findByVehicleProfileName(String vehicleProfileName);

    // Find All vehicle Profiles by a specific vehicle type
    List<VehicleProfile> findAllByVehicleType(String vehicleType);

    // Find vehicle profiles by user ID
    List<VehicleProfile> findByUserId(long userId);

    // Find vehicle profiles by vehicle reg number
    List<VehicleProfile> findByVehicleRegNo(String vehicleRegNo);

    // Find vehicle profiles by multiple criteria
    List<VehicleProfile> findByVehicleTypeAndVehicleManufacturer(String vehicleType, String vehicleManufacturer);

    //@Query("MATCH (c:VEHICLEPROFILE)\n" + "RETURN c;")
    @Query("MATCH (VehicleProfile:vehicleProfile)\n" +
            "RETURN vehicleProfile.vehicleProfileId AS vehicleProfileId," +
            "vehicleProfile.vehicleProfileName AS vehicleProfileName, " + "vehicleProfile.vehicleType AS vehicleType," +
            " vehicleProfile.vehicleModel AS vehicleModel,  vehicleProfile.vehicleRegNo AS vehicleRegNo")
    List<VehicleProfile> findAllByOrderByVehicleProfileIdASC();
}

