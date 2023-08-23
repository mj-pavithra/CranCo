package com.Cranco.Cranco.Auth;

import com.Cranco.Cranco.User.CreateUserRequest;
import com.Cranco.Cranco.User.User;
import com.Cranco.Cranco.User.UserDto;
import com.Cranco.Cranco.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
public class AuthService {
    private UserRepository userRepository;

    @Autowired
    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String logUser(LoginRequest request) {
        //check for existing email
        List<User> userByEmail = userRepository.findByEmail(request.getEmail());
        if (userByEmail.isEmpty()) {
            throw new IllegalStateException(("not an accont registered with this mail"));
        }
        User user = userByEmail.get(0);

        if (!user.getPassword().equals(request.getPassword())) {
            throw new IllegalStateException(("Wrong Password"));
        }
        return user.getUsername();
    }
}
