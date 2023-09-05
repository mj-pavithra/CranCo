package com.Cranco.Cranco.BusinessUser;

import com.Cranco.Cranco.User.CreateUserRequest;
import com.Cranco.Cranco.User.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessUserService {
    public BusinessUserRepository businessUserRepository;

    @Autowired
    public BusinessUserService(BusinessUserRepository businessUserRepository){
        this.businessUserRepository = businessUserRepository;
    }

    public BusinessUserDto createBusinessUser(CreateBusinessRequest request){

        List<BusinessUser> bUserByEmail = businessUserRepository.findByEmail(request.getEmail());
        if(!bUserByEmail.isEmpty()) {
            throw new IllegalStateException(("email taken"));
        }

        BusinessUser newBusinessUser = new BusinessUser();
        newBusinessUser.setBusinessname(request.getBusinessname());
        newBusinessUser.setOwnername(request.getOwnername());
        newBusinessUser.setMobilenumber(request.getMobilenumber());
        newBusinessUser.setEmail(request.getEmail());

        BusinessUser savedBusinessUser = businessUserRepository.save(newBusinessUser);
        return mapToDto(savedBusinessUser);
    }

    public BusinessUserDto mapToDto(BusinessUser businessUser){
        BusinessUserDto dto = new BusinessUserDto();
        dto.setId(businessUser.getId());
        dto.setBusinessname(businessUser.getBusinessname());
        dto.setOwnername(businessUser.getOwnername());
        dto.setMobilenumber(businessUser.getMobilenumber());
        dto.setEmail(businessUser.getEmail());

        return dto;
    }
}
