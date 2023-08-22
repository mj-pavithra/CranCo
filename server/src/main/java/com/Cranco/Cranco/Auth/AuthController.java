package com.Cranco.Cranco.Auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private AuthService authService;
@Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/auth")
//        public ResponseEntity<UserDto> createUser(@RequestBody CreateUserRequest request){
        public void createUser(@RequestBody LoginRequest request){
//            UserDto createdUser = authService.logUser(request);
//            return ResponseEntity.ok(createdUser);
        authService.logUser(request);
    }
}
