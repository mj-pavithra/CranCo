package com.Cranco.Cranco.Auth;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    @JsonProperty("access_token")
    private String token;

    @JsonProperty("refresh_token")
    private String refreshToken;

    @JsonProperty("user_id")
    private long userId;

    @JsonProperty("user_email")
    private String email;

    @JsonProperty("user_name")
    private String username;
}
