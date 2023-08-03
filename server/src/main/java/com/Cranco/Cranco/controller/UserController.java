package com.Cranco.Cranco.controller;

import com.Cranco.Cranco.dto.ResponseDTO;
import com.Cranco.Cranco.dto.UserDTO;
import com.Cranco.Cranco.service.UserService;
import com.Cranco.Cranco.util.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @Autowired
    private ResponseDTO responseDTO;

    @PostMapping(value="/saveUser")
    public ResponseEntity saveUser(@RequestBody UserDTO userDTO){
        try{
            //return ResponseEntity.ok().body("Success");
            String res = userService.saveUser(userDTO);
            if(res.equals("00")) {
                responseDTO.setCode(VarList.Respond_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(userDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            }else if(res.equals("06")){
                responseDTO.setCode(VarList.Respond_DUPLICATED);
                responseDTO.setMessage("User already exist");
                responseDTO.setContent(userDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }else {
                responseDTO.setCode(VarList.Respond_ERROR);
                responseDTO.setMessage("Error");
                responseDTO.setContent(userDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
//            responseDTO.setCode(VarList.Respond_ERROR);
//            responseDTO.setMessage(");
//            responseDTO.setContent(null);
//            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
//            return ResponseEntity.badRequest().body("Error");
        }
        return null;
    }
}
