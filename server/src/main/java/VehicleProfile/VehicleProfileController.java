package VehicleProfile;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/vehicle-profiles")
public class VehicleProfileController {
    private final VehicleProfileService vehicleProfileService;

    public VehicleProfileController(VehicleProfileService vehicleProfileService) {
        this.vehicleProfileService = vehicleProfileService;
    }


    @PostMapping()
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
}
