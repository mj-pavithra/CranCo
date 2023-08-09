package com.Cranco.Cranco.service;

import com.Cranco.Cranco.dto.UserDTO;
import com.Cranco.Cranco.model.User;
import com.Cranco.Cranco.repository.UserRepository;
import com.Cranco.Cranco.util.VarList;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
//import org.springframework.util.StringUtils;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String SaveUser(UserDTO userDTO) {
        // Check if the user ID is already taken.
//        if (userRepo.existsById(userDTO.getuserId())) {
//            return VarList.Respond_DUPLICATED;
//        } else {
//            // Validate the user data.
//            //validator.firstnamevalidator(userDTO.getFirstname());
//            //Validator validator = new Validator();
//            //int validateStatusCode = validator.validateParams(nic, password);
//            // Save the user data.
//            userRepo.save(modelMapper.map(userDTO, User.class));
//
//            // Return the success message.
//            return VarList.Respond_SUCCESS;
//        }
        Optional<User> existingUser = userRepo.findByUserId(userDTO.getuserId());
        if (existingUser.isPresent()) {
            return VarList.Respond_DUPLICATED;
        } else {
            User user = modelMapper.map(userDTO, User.class);
            userRepo.save(user);
            return VarList.Respond_SUCCESS;
        }
    }
    public String updateUser(UserDTO userDTO) {
//        if(userRepo.existsById(userDTO.getuserId())){
//            userRepo.save(modelMapper.map(userDTO, User.class));
//            return VarList.Respond_SUCCESS;
//        }else{
//            return VarList.Respond_NO_DATA_FOUND;
//        }
        Optional<User> existingUser = userRepo.findByUserId(userDTO.getuserId());
        if (existingUser.isPresent()) {
            User user = existingUser.get();
            modelMapper.map(userDTO, user);
            userRepo.save(user);
            return VarList.Respond_SUCCESS;
        } else {
            return VarList.Respond_NO_DATA_FOUND;
        }
    }
    public List<UserDTO> getAllUsers() {
//        List<User> userList = userRepo.findAll();
//        return modelMapper.map(userList, new TypeToken<ArrayList<UserDTO>>(){
//        }.getType());
          List<UserDTO> userDTOList = userRepo.findAll().stream()
                .map(user -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
          return userDTOList;
    }

    public UserDTO searchUser(int userId) {
          Optional<User> user = userRepo.findByUserId(userId);
          return user.map(value -> modelMapper.map(value, UserDTO.class)).orElse(null);
//        if(userRepo.existsById(userId)){
//            User user = userRepo.findById(userId).orElse(null);
//            return modelMapper.map(user, UserDTO.class);
//        }else{
//            return null;
//        }
    }

    public String deleteUser(int userId) {
          Optional<User> user = userRepo.findByUserId(userId);
          if (user.isPresent()) {
              userRepo.delete(user.get());
              return VarList.Respond_SUCCESS;
          } else {
              return VarList.Respond_NO_DATA_FOUND;
          }
//        if(userRepo.existsById(userId)){
//            userRepo.deleteById(userId);
//            return VarList.Respond_SUCCESS;
//        }else{
//            return VarList.Respond_NO_DATA_FOUND;
//        }
    }
}

