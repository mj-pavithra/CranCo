package com.Cranco.Cranco.BusinessUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/businessUser")
@CrossOrigin
public class BusinessUserController {

    private final BusinessUserService businessUserService;

    @Autowired
    public BusinessUserController(BusinessUserService businessUserService) {
        this.businessUserService = businessUserService;
    }

    @PostMapping("/saveBUser")
    public ResponseEntity<BusinessUserDto> createBusinessUser(@RequestBody CreateBusinessRequest request){
        BusinessUserDto createdBusinessUser = businessUserService.createBusinessUser(request);
        return ResponseEntity.ok(createdBusinessUser);
    }
}
