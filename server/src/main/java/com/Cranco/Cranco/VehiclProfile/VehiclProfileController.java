package com.Cranco.Cranco.VehiclProfile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/vehicle-profiles")
public class VehiclProfileController {

    @Autowired
    private VehicleProfileService vehicleProfileService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleProfile> getAllVehicleProfiles() {
        return vehicleProfileService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VehicleProfile getVehicleProfileById(@PathVariable Long id) {
        // Get the Optional<VehicleProfile> object from the service
        Optional<VehicleProfile> optionalVehicleProfile = vehicleProfileService.findById(id);

        // Check if the Optional is not empty
        if (optionalVehicleProfile.isPresent()) {
            // Get the VehicleProfile object inside the Optional
            VehicleProfile vehicleProfile = optionalVehicleProfile.get();
            // Return the VehicleProfile object
            return vehicleProfile;
        } else {
            // Handle the case where the Optional is empty
            // You can return null, a new VehicleProfile object, or throw an exception
            // For example:
            return null;
            // Or:
            // return new VehicleProfile();
            // Or:
            // throw new VehicleProfileNotFoundException("Vehicle profile with id " + id + " not found");
        }
    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public VehicleProfile createVehicleProfile(@RequestBody @Validated VehicleProfile vehicleProfile) {
        return vehicleProfileService.save(vehicleProfile);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VehicleProfile updateVehicleProfile(@PathVariable Long id, @RequestBody @Validated VehicleProfile vehicleProfile) {
        return vehicleProfileService.update(id, vehicleProfile);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteVehicleProfile(@PathVariable Long id) {
        vehicleProfileService.delete(id);
    }
}
