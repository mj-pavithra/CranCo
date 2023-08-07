package com.Cranco.Cranco.service;

import com.Cranco.Cranco.dto.UserDTO;
import com.Cranco.Cranco.model.User;
import com.Cranco.Cranco.repo.UserRepo;
import com.Cranco.Cranco.util.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
//import org.springframework.util.StringUtils;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String SaveUser(UserDTO userDTO) {
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
    public String updateUserDetails(UserDTO userDTO) {
        if(userRepo.existsById(userDTO.getuserId())){
            userRepo.save(modelMapper.map(userDTO, User.class));
            return VarList.Respond_SUCCESS;
        }else{
            return VarList.Respond_NO_DATA_FOUND;
        }
    }
    public List<UserDTO> getAllUsers() {
        List<User> userList = userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<ArrayList<UserDTO>>(){
        }.getType());
    }

    public UserDTO searchUser(int userId) {
        if(userRepo.existsById(userId)){
            User user = userRepo.findById(userId).orElse(null);
            return modelMapper.map(user, UserDTO.class);
        }else{
            return null;
        }
    }

    public String deleteUser(int userId) {
        if(userRepo.existsById(userId)){
            userRepo.deleteById(userId);
            return VarList.Respond_SUCCESS;
        }else{
            return VarList.Respond_NO_DATA_FOUND;
        }
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
//}
//}
