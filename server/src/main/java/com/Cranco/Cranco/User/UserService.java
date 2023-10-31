package com.Cranco.Cranco.User;

import com.Cranco.Cranco.Post.Post;
import com.Cranco.Cranco.Post.PostRepository;
import com.Cranco.Cranco.Notification.Notification;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository, PostRepository postRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
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

    public List<User> getAllUsersSortedByuserId() {
        return userRepository.findAllByOrderByUserIdASC();
    }

    public long getUserCount() {
        return userRepository.getUserCount();
    }

    public List<User> searchUsers(long username) {
        return userRepository.searchUsers(username);
    }

//    public List<User> searchUsers(String username) {
//        return userRepository.searchUsers(username);
//    }

//    public long countUsersByUserId(String userId) {
//        return userRepository.countUsersByUserId(userId);
//    }
}
