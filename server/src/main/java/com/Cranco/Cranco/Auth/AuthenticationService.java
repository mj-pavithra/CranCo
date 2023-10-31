package com.Cranco.Cranco.Auth;


import com.Cranco.Cranco.Token.Token;
import com.Cranco.Cranco.Token.TokenRepository;
import com.Cranco.Cranco.User.Role;
import com.Cranco.Cranco.User.User;
import com.Cranco.Cranco.User.UserRepository;
import com.Cranco.Cranco.Config.JwtService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;

    public AuthenticationResponse register(RegisterRequest request) {

        Optional<User> userByEmail = repository.findByEmail(request.getEmail());
        if (userByEmail.isPresent()) {
            throw new IllegalStateException(("email taken"));
        }
        var user = User.builder().username(request.getUsername()).email(request.getEmail()).password(passwordEncoder.encode(request.getPassword())).role(Role.USER).build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .refreshToken((jwtToken))
                .username(user.getRealUsername())
                .userId(user.getId())
                .email(user.getEmail())
                .build();
    }

    public void changePassword(String userEmail, String currentPassword, String newPassword) throws Exception {
        if (currentPassword == null || newPassword == null || userEmail == null) {
            throw new Exception("bad request");
        }
        var user = repository.findByEmail(userEmail).orElseThrow();
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userEmail, currentPassword));
        user.setPassword(passwordEncoder.encode(newPassword));
        repository.save(user);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        var user = repository.findByEmail(request.getUsername()).orElseThrow();
        System.out.println(user);
//    todo: problem in this line
        String username = user.getRealUsername();;
        user.setUsername(user.getEmail());
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        saveRefreshToken(user, refreshToken);
        return AuthenticationResponse
                .builder().
                token(jwtToken)
                .refreshToken(refreshToken)
                .userId(user.getId())
                .email(user.getEmail())
                .username(username)
                .build();
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder().user_id(user.getUsername()).token(jwtToken).expired(false).revoked(false).refresh(false).build();
        tokenRepository.save(token);
    }

    private void saveRefreshToken(User user, String jwtToken) {
        var token = Token.builder().user_id(user.getUsername()).token(jwtToken).expired(false).revoked(false).refresh(true).build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
//        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getUsername());
        tokenRepository.deleteAllTokensByUser_id(user.getEmail());
    }

    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        userEmail = jwtService.extractUsername(refreshToken);
        if (userEmail != null) {
            var user = this.repository.findByEmail(userEmail).orElseThrow();
            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateToken(user);
                revokeAllUserTokens(user);
                saveUserToken(user, accessToken);
                saveRefreshToken(user, refreshToken);
                var authResponse = AuthenticationResponse.builder().token(accessToken).refreshToken(refreshToken).build();
                response.setContentType("application/json");
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }
}
