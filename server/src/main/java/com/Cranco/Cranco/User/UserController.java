package com.Cranco.Cranco.User;

import com.Cranco.Cranco.Post.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("email") String email) {

        CreateUserRequest request = new CreateUserRequest();
        request.setUsername(username);
        request.setEmail(email);
        request.setPassword(password);

        UserDto createdUser = userService.createUser(request);
        return ResponseEntity.ok(createdUser);
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        User user = userService.findUserByUsername(username);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/validate-token")
    public ResponseEntity<String> validateToken(){
        return new ResponseEntity<>("valid token", HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsersSortedByuserId() {
        try {
            List<User> userList = userService.getAllUsersSortedByuserId();
            return ResponseEntity.ok(userList);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/count")
    public long getUserCount() {
        return userService.getUserCount();
    }

    @GetMapping("/search/{username}")
    public ResponseEntity<List<User>> searchUsers(@PathVariable long username) {
        try {
            List<User> userList = userService.searchUsers(username);
            return ResponseEntity.ok(userList);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

//    @GetMapping("/search/{username")
//    public ResponseEntity<List<User>> searchUsers(@PathVariable String username) {
//        try {
//            List<User> userList = userService.searchUsers(username);
//            return ResponseEntity.ok(userList);
//        } catch (Exception ex) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }

//    @GetMapping("/count")
//    public long countUsersByUserId(@RequestParam String userId) {
//        return userService.countUsersByUserId(userId);
//    }
}
