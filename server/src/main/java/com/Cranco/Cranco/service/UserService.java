package com.Cranco.Cranco.service;


import com.Cranco.Cranco.model.User;
import com.Cranco.Cranco.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class UserService {
    final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Collection<User> getAll() {
        return userRepository.getAllUsers();
    }
}
