package com.Cranco.Cranco.Auth;


import com.Cranco.Cranco.User.Role;
import com.Cranco.Cranco.User.User;
import com.Cranco.Cranco.User.UserRepository;
import com.Cranco.Cranco.Config.JwtService;
import lombok.RequiredArgsConstructor;
import org.jooq.meta.derby.sys.Sys;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {

        Optional<User> userByEmail = repository.findByEmail(request.getEmail());
        if (!userByEmail.isEmpty()) {
            throw new IllegalStateException(("email taken"));
        }
        var user = User.builder().username(request.getUsername()).email(request.getEmail()).password(passwordEncoder.encode(request.getPassword())).role(Role.USER).build();
        repository.save(user);
        System.out.println("user added " + request.getUsername());
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        var user = repository.findByEmail(request.getUsername()).orElseThrow();
        user.setUsername(user.getEmail());
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

//    public void changePassword(
//            String userEmail,
//            String currentPassword,
//            String newPassword
//    ) {
//    }


    public void changePassword(
            String userEmail,
            String currentPassword,
            String newPassword
    ) throws Exception {
        System.out.println("service called");
        if (currentPassword == null || newPassword == null || userEmail == null) {
            System.out.println("forst if called");
            throw new Exception("bad request");
        }
        System.out.println("forst if passed");
        var user = repository.findByEmail(userEmail).orElseThrow();
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userEmail, currentPassword));
        System.out.println("password matched");
        user.setPassword(passwordEncoder.encode(newPassword));
        repository.save(user);
        System.out.println("password changed");
    }
}
