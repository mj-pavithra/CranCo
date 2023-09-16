package com.Cranco.Cranco.VehiclProfile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleProfileService {

    @Autowired
    private VehicleProfileRepository vehicleProfileRepository;

    public List<VehicleProfile> findAll() {
        return vehicleProfileRepository.findAll();
    }

    public Optional<VehicleProfile> findById(Long id) {
        return vehicleProfileRepository.findById(id);
    }

    public VehicleProfile save(VehicleProfile vehicleProfile) {
        return vehicleProfileRepository.save(vehicleProfile);
    }

    public VehicleProfile update(Long id, VehicleProfile vehicleProfile) {
        Optional<VehicleProfile> existingVehicleProfile = vehicleProfileRepository.findById(id);
        if (existingVehicleProfile.isPresent()) {
            VehicleProfile updatedVehicleProfile = existingVehicleProfile.get();
            updatedVehicleProfile.setVehicleProfileName(vehicleProfile.getVehicleProfileName());
            updatedVehicleProfile.setVehicleName(vehicleProfile.getVehicleName());
            updatedVehicleProfile.setPrevOwners(vehicleProfile.getPrevOwners());
            updatedVehicleProfile.setGovRegNo(vehicleProfile.getGovRegNo());
            updatedVehicleProfile.setVehicleBrand(vehicleProfile.getVehicleBrand());
            updatedVehicleProfile.setVehicleModel(vehicleProfile.getVehicleModel());
            updatedVehicleProfile.setVisibility(vehicleProfile.isVisibility());
            updatedVehicleProfile.setOwnership(vehicleProfile.isOwnership());
            updatedVehicleProfile.setOnMarketplace(vehicleProfile.isOnMarketplace());
            return vehicleProfileRepository.save(updatedVehicleProfile);
        } else {
            return null;
        }
    }

    public void delete(Long id) {
        vehicleProfileRepository.deleteById(id);
    }
}
