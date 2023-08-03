package com.Cranco.Cranco.controller;

import com.Cranco.Cranco.dto.UserDTO;
import com.Cranco.Cranco.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(value="/saveUser")
    public ResponseEntity saveUser(@RequestBody UserDTO userDTO){
        try{
            //return ResponseEntity.ok().body("Success");
            String res = userService.saveUser(userDTO);
            if(res.equals("00")) {
           //   return ResponseEntity.ok().body("Success");
            }else if(res.equals("06")){
            }else {
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error");
        }
    }
}
