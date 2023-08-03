package com.Cranco.Cranco.service;

import com.Cranco.Cranco.dto.UserDTO;
import com.Cranco.Cranco.repo.UserRepo;
import com.Cranco.Cranco.util.VarList;
import org.springframework.beans.factory.annotation.Autowired;

public class UserService {

    @Autowired
    private UserRepo userRepo;
    public String SaveUser(UserDTO userDTO){
        if (userRepo.exitById(UserDTO.getUserId()))
        {
            return VarList.Respond_DUPLICATED;
        }
        else
        {
            userRepo.save(userDTO);
        }
//        User user = new User();
//        user.setUsername(userDTO.getUsername());
//        user.setPassword(userDTO.getPassword());
//        userRepo.save(user);
//        return "User saved";
    }

}
