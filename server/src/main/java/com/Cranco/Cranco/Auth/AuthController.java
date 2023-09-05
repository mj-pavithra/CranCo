package com.Cranco.Cranco.Auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class AuthController {

    private AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/auth")
//        public ResponseEntity<UserDto> createUser(@RequestBody CreateUserRequest request){
    public ResponseEntity<String> createUser(@RequestBody LoginRequest request) {
//            UserDto createdUser = authService.logUser(request);
//            return ResponseEntity.ok(createdUser);
        String username = authService.logUser(request);
        return ResponseEntity.ok(username);
    }
}
