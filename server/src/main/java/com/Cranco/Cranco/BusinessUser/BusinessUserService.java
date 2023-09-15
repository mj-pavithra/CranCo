package com.Cranco.Cranco.BusinessUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BusinessUserService {
    public BusinessUserRepository businessUserRepository;

    @Autowired
    public BusinessUserService(BusinessUserRepository businessUserRepository){
        this.businessUserRepository = businessUserRepository;
    }

    public BusinessUserDto createBusinessUser(CreateBusinessUserRequest request){

        List<BusinessUser> bUserByEmail = businessUserRepository.findByEmail(request.getEmail());
        if(!bUserByEmail.isEmpty()) {
            throw new IllegalStateException(("email taken"));
        }

        BusinessUser newBusinessUser = new BusinessUser();
        newBusinessUser.setBusinessname(request.getBusinessname());
        newBusinessUser.setOwnername(request.getOwnername());
        newBusinessUser.setMobilenumber(request.getMobilenumber());
        newBusinessUser.setEmail(request.getEmail());
        newBusinessUser.setAddress(request.getAddress());
        newBusinessUser.setBio(request.getBio());

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
        dto.setAddress(businessUser.getAddress());
        dto.setBio(businessUser.getBio());

        return dto;
    }

    public List<BusinessUserDto> allBusinessUsers(){
        List<BusinessUser> businessUserList = businessUserRepository.findAll();
        return businessUserList.stream().map(this::mapToDto).toList();
    }

    public BusinessUserDto businessUserDetails(Long id){
        Optional<BusinessUser> optionalBusinessUser = businessUserRepository.findById(id);
        return optionalBusinessUser.map(this::mapToDto).orElse(null);
    }

    public BusinessUserDto updateBusinessUser(CreateBusinessUserRequest request, Long id){
        Optional<BusinessUser> optionalBusinessUser = businessUserRepository.findById(id);
        if(optionalBusinessUser.isEmpty()){
            throw new IllegalStateException("ID not found");
        }

        BusinessUser existingBusinessUser = optionalBusinessUser.get();
        existingBusinessUser.setBusinessname(request.getBusinessname());
        existingBusinessUser.setOwnername(request.getOwnername());
        existingBusinessUser.setMobilenumber(request.getMobilenumber());
        existingBusinessUser.setEmail(request.getEmail());
        existingBusinessUser.setAddress(request.getAddress());
        existingBusinessUser.setBio(request.getBio());

        BusinessUser updateBusinessUser = businessUserRepository.save(existingBusinessUser);
        return mapToDto(updateBusinessUser);
    }

    public boolean deleteBusinessUser(Long id){
        Optional<BusinessUser> optionalBusinessUser = businessUserRepository.findById(id);
        if(optionalBusinessUser.isEmpty()){
            throw new IllegalStateException("ID not found");
        }

        businessUserRepository.deleteById(id);
        return true;
    }
}
