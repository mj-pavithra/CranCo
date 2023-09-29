package com.Cranco.Cranco.User;

import com.Cranco.Cranco.Post.Post;
import com.Cranco.Cranco.Post.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

import com.Cranco.Cranco.Notification.Notification;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
@Transactional
public class UserService {

    @Autowired
    private PostRepository postRepository;
    private UserRepository userRepository;




    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDto createUser(CreateUserRequest request) {
        //check for existing email
        // commented till 25
//        List<User> userByEmail =  userRepository.findByEmail(request.getEmail());
//        if(!userByEmail.isEmpty()){
//            throw new IllegalStateException(("email taken"));
//        }

        User newUser = new User();
        newUser.setUsername(request.getUsername());
        newUser.setPassword(request.getPassword());

        User savedUser = userRepository.save(newUser);
        return mapToDto(savedUser);
    }

    public UserDto mapToDto(User user) {
        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setUsername(user.getUsername());
        return dto;
    }



    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public void addNotificationToSender(User sender, Notification notification) {
        sender.getSentNotifications().add(notification);
    }

    public void addNotificationToReceiver(User receiver, Notification notification) {
        receiver.getReceivedNotifications().add(notification);
    }

    public User findUserById(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

}
