package com.Cranco.Cranco.User;

import org.neo4j.cypherdsl.core.Use;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
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
    @PostMapping(value = "/uploadCoverPhoto", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> updateCoverphoto(@RequestPart("coverPhoto") MultipartFile coverPhoto,
                                                   @RequestPart("userId") String userIdString) {
        Long userId = Long.parseLong(userIdString);
        String result = userService.updateCoverphoto(coverPhoto, userId);
        System.out.println(result);
        return ResponseEntity.ok(result);
    }

    @PostMapping(value = "/uploadProPic", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> updateProPic(@RequestPart("proPic") MultipartFile proPic,
                                                   @RequestPart("userId") String userIdString) {
        Long userId = Long.parseLong(userIdString);
        String result = userService.updatePropic(proPic, userId);
        System.out.println(result);
        return ResponseEntity.ok(result);
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

    @PostMapping("/sendFriendRequest")
    public ResponseEntity<String> sendFriendRequest(@RequestBody Map<String,String> payLoad){
        String receiverEmail = payLoad.get("receiver_email");
        return userService.sendFriendRequest(receiverEmail);
    }

    @PostMapping("/acceptFriendRequest")
    public ResponseEntity<String> acceptFriendRequest(@RequestBody Map<String,String> payLoad){
        String userEmail = payLoad.get("user_email");
        return userService.acceptFriendRequest(userEmail);
    }

    @PostMapping("/unfriendUser")
    public ResponseEntity<String> unfriendUser(@RequestBody Map<String,String> payLoad){
        String userEmail = payLoad.get("user_email");
        return userService.unfriendUser(userEmail);
    }

    @PostMapping("/follow")
    public ResponseEntity<String> followUser(@RequestBody Map<String,String> payLoad){
        String userEmail = payLoad.get("user_email");
        return userService.followUser(userEmail);
    }

    @PostMapping("/unfollow")
    public ResponseEntity<String> unFollowUser(@RequestBody Map<String,String> payLoad){
        String userEmail = payLoad.get("user_email");
        return userService.unfollowUser(userEmail);
    }

    @GetMapping("/all/friends")
    public ResponseEntity<List<User>> getAllFriends(){
        List<User> friends = userService.getFriends();
        return new ResponseEntity<>(friends,HttpStatus.OK);
    }
}
