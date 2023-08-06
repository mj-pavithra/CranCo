package com.Cranco.Cranco.service;

import com.Cranco.Cranco.dto.UserDTO;
import com.Cranco.Cranco.model.User;
import com.Cranco.Cranco.repo.UserRepo;
import com.Cranco.Cranco.util.Validator;
import com.Cranco.Cranco.util.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
//import org.springframework.util.StringUtils;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String SaveUser(UserDTO userDTO){
        // Check if the user ID is already taken.
        if (userRepo.existsById(userDTO.getuserId())) {
            return VarList.Respond_DUPLICATED;
        } else {
            // Validate the user data.
            //validator.firstnamevalidator(userDTO.getFirstname());
            //Validator validator = new Validator();
            //int validateStatusCode = validator.validateParams(nic, password);
            // Save the user data.
            userRepo.save(modelMapper.map(userDTO, User.class));

            // Return the success message.
            return VarList.Respond_SUCCESS;
        }
    }

//        if (userRepo.exitById(UserDTO.getuserId()))
//        {
//            return VarList.Respond_DUPLICATED;
//        }
//        else
//        {
//            userRepo.save(modelMapper.map(userDTO, User.class));
//            return VarList.Respond_SUCCESS;
//        }
    }
}
