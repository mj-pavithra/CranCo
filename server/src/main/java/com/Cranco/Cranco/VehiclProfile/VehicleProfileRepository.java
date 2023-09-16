package com.Cranco.Cranco.VehiclProfile;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VehicleProfileRepository extends Neo4jRepository<VehicleProfile, Long> {

    Optional<VehicleProfile> findByPrevOwners(String prevOwners);
    VehicleProfile findByVehicleProfileName(String vehicleProfileName);

    VehicleProfile findByGovRegNo(String govRegNo);
}
