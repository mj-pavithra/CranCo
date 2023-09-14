package com.Cranco.Cranco.BusinessUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/businessUser")
@CrossOrigin
public class BusinessUserController {

    private final BusinessUserService businessUserService;

    @Autowired
    public BusinessUserController(BusinessUserService businessUserService) {
        this.businessUserService = businessUserService;
    }

    @PostMapping("/savebuser")
    public ResponseEntity<BusinessUserDto> createBusinessUser(@RequestBody CreateBusinessUserRequest request){
        BusinessUserDto createdBusinessUser = businessUserService.createBusinessUser(request);
        return ResponseEntity.ok(createdBusinessUser);
    }

    @GetMapping("/viewbuser")
    public List<BusinessUserDto> getBusinessUserList(){
        return businessUserService.allBusinessUsers();
    }

    @GetMapping("/viewbuser/{id}")
    public ResponseEntity<BusinessUserDto> getBusinessUserDetails(@PathVariable Long id){
        BusinessUserDto businessUser = businessUserService.businessUserDetails(id);

        if(businessUser != null){
            return ResponseEntity.ok(businessUser);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/updatebuser/{id}")
    public ResponseEntity<BusinessUserDto> updateBusinessUser(@RequestBody CreateBusinessUserRequest request, @PathVariable Long id){
        BusinessUserDto updateBusinessUser = businessUserService.updateBusinessUser(request, id);
        return ResponseEntity.ok(updateBusinessUser);
    }

    @DeleteMapping("/deletebuser/{id}")
    public ResponseEntity<Boolean> deleteBusinessUser(@PathVariable Long id){
        Boolean deleteBusinessUser = businessUserService.deleteBusinessUser(id);
        return ResponseEntity.ok(deleteBusinessUser);
    }
}
