package com.Cranco.Cranco.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDto createUser(CreateUserRequest request){
        //check for existing email
        Optional<User> userByEmail =  userRepository.findByEmail(request.getEmail());
        if(!userByEmail.isEmpty()){
            throw new IllegalStateException(("email taken"));
        }

        User newUser = new User();
        newUser.setUsername(request.getUsername());
        newUser.setPassword(request.getPassword());
        newUser.setEmail(request.getEmail());

        User savedUser = userRepository.save(newUser);
        return mapToDto(savedUser);
    }

    public UserDto mapToDto(User user){
        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setUsername(user.getUsername());
        return dto;
    }
}
