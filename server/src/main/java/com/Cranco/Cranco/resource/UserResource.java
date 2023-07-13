package com.Cranco.Cranco.resource;

import com.Cranco.Cranco.model.User;
import com.Cranco.Cranco.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("rest/neo4j/user")
public class UserResource {
    final UserService userService;

    public UserResource(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public Collection<User> getAll(){
        return userService.getAll();
    }
}
