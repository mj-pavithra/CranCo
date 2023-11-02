package com.Cranco.Cranco.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SecuredUserDto {
    private Long id;
    private String username;
    private String email;
}
