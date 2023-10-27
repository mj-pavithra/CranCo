package com.Cranco.Cranco.Auth;

import com.Cranco.Cranco.Config.JwtService;
import com.Cranco.Cranco.User.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.jooq.meta.derby.sys.Sys;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    private final UserService userService;
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        System.out.println("authenticationcontroller called");
//        todo : VALIDATE USER INPUTS
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping("/validate-token")
    public ResponseEntity<String> validateToken(@RequestBody Map<String, String> requestPayload) {
        String token = requestPayload.get("token");
        System.out.println(token);
        String userEmail = jwtService.extractUsername(token);
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() != null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
            if (jwtService.isTokenValid(token, userDetails)) {
                return new ResponseEntity<>("token is valid", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("invalid token", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody Map<String,String> requestPayload){
        System.out.println("controller called");
        String currentPassword = requestPayload.get("currentPassword");
        String newPassword = requestPayload.get("newPassword");
        String userEmail = requestPayload.get("email");

        try {
            service.changePassword(userEmail,currentPassword,newPassword);
            return ResponseEntity.ok("Password changed successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        service.refreshToken(request, response);
    }
}
