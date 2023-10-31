package com.Cranco.Cranco.VehicleProfile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleProfileService {

    private final VehicleProfileRepository vehicleProfileRepository;
    private final VehicleProfileUtil vehicleProfileUtil;

    @Autowired
    public VehicleProfileService(VehicleProfileRepository vehicleProfileRepository, VehicleProfileUtil vehicleProfileUtil) {
        this.vehicleProfileRepository = vehicleProfileRepository;
        this.vehicleProfileUtil = vehicleProfileUtil;
    }
    public VehicleProfile createVehicleProfile(VehicleProfileDto vehicleProfileDto) {
        this.vehicleProfileUtil.validateVehicleProfile(vehicleProfileDto);
        VehicleProfile vehicleProfile = this.vehicleProfileUtil.toVehicleProfile(vehicleProfileDto);
        return vehicleProfileRepository.save(vehicleProfile);
    }

    public VehicleProfile getVehicleProfileById(Long vehicleProfileId) {
        return vehicleProfileRepository.findById(vehicleProfileId).orElse(null);
    }

    public List<VehicleProfile> getAllVehicleProfiles() {
        return vehicleProfileRepository.findAll();
    }

    public void deleteVehicleProfile(Long vehicleProfileId) {
        vehicleProfileRepository.deleteById(vehicleProfileId);
    }

    public VehicleProfile updateVehicleProfile(VehicleProfile vehicleProfile) {
        return vehicleProfileRepository.save(vehicleProfile);
    }

    public List<VehicleProfile> getAllVehiceProfilesSortedByvehicleProfileId() {
        return vehicleProfileRepository.findAllByOrderByVehicleProfileIdASC();
    }

    public long getVehicleProfileCount() {
        return vehicleProfileRepository.getVehicleProfileCount();
    }

    public List<VehicleProfile> searchVehicleProfiles(long vehicleProfileName) {
        return vehicleProfileRepository.searchVehicleProfiles(vehicleProfileName);
    }

//    public List<VehicleProfile> searchVehicleProfiles(String vehicleProfileName) {
//        return vehicleProfileRepository.searchVehicleProfiles(vehicleProfileName);
//    }
}

