package com.Cranco.Cranco.service;

import com.Cranco.Cranco.dto.UserDTO;
import com.Cranco.Cranco.model.User;
import com.Cranco.Cranco.repo.UserRepo;
import com.Cranco.Cranco.util.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public
class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;
    public String SaveUser(UserDTO userDTO){
        if (userRepo.exitById(UserDTO.getUserId()))
        {
            return VarList.Respond_DUPLICATED;
        }
        else
        {
            userRepo.save(modelMapper.map(userDTO, User.class));
            return VarList.Respond_SUCCESS;
        }
    }

//    public String saveUser(UserDTO userDTO) {
//    }
}
