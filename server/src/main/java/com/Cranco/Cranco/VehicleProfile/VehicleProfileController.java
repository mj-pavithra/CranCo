package com.Cranco.Cranco.VehicleProfile;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/vehicle-profiles")
public class VehicleProfileController {
    private final VehicleProfileService vehicleProfileService;

    public VehicleProfileController(VehicleProfileService vehicleProfileService) {
        this.vehicleProfileService = vehicleProfileService;
    }


    @PostMapping("/create")
    public ResponseEntity<VehicleProfile> createVehicleProfile(@RequestBody VehicleProfileDto vehicleProfileDto) {

        return ResponseEntity.status(201).body(this.vehicleProfileService.createVehicleProfile(vehicleProfileDto));
    }

    @GetMapping("/{vehicleProfileId}")
    public ResponseEntity<VehicleProfile> getVehicleProfileById(@PathVariable Long vehicleProfileId) {
        VehicleProfile vehicleProfile = this.vehicleProfileService.getVehicleProfileById(vehicleProfileId);
        if (vehicleProfile != null) {
            return ResponseEntity.ok(vehicleProfile);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping()
    public ResponseEntity<List<VehicleProfile>> getAllVehicleProfiles() {
        System.out.println("in getAllVehicleProfiles");
        List<VehicleProfile> vehicleProfiles = this.vehicleProfileService.getAllVehicleProfiles();
        return ResponseEntity.ok(vehicleProfiles);
    }

    @PutMapping("/{vehicleProfileId}")
    public ResponseEntity<VehicleProfile> updateVehicleProfile(
            @PathVariable Long vehicleProfileId,
            @RequestBody VehicleProfile updatedVehicleProfile) {
        updatedVehicleProfile.setVehicleProfileId(vehicleProfileId); // Set the ID from the URL path
        VehicleProfile updatedProfile = this.vehicleProfileService.updateVehicleProfile(updatedVehicleProfile);
        if (updatedProfile != null) {
            return ResponseEntity.ok(updatedProfile);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{vehicleProfileId}")
    public ResponseEntity<Void> deleteVehicleProfile(@PathVariable Long vehicleProfileId) {
        this.vehicleProfileService.deleteVehicleProfile(vehicleProfileId);
        return ResponseEntity.noContent().build();
    }

//    @PostMapping("/lost/{vehicleProfileId}")
//    public String Lostvehicle(
//            @PathVariable Long vehicleProfileId,
//            @RequestParam String postText,
//            @RequestParam
//    ){
//        return "success";
//    }
}
