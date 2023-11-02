package com.Cranco.Cranco.User;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
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
                                                   @RequestPart("email") String email) {
        String result = userService.updateCoverphoto(coverPhoto, email);
        System.out.println(result);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/getCoverPhoto")
    public String getCoverPhoto(@RequestParam("email") String email){
        return userService.getCoverPhoto(email);
    }

    @GetMapping("/getProPic")
    public String getgetProPic(@RequestParam("email") String email){
        return userService.getProPic(email);
    }

    @PostMapping(value = "/uploadProPic", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> updateProPic(@RequestPart("proPic") MultipartFile proPic,
                                               @RequestPart("email") String email) {
        String result = userService.updatePropic(proPic, email);
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

    @PostMapping("/rejectFriendRequest")
    public ResponseEntity<String> rejectFriendRequest(@RequestBody Map<String,String> payLoad){
        String userEmail = payLoad.get("user_email");
        return userService.rejectFriendRequest(userEmail);
    }

    @PostMapping("/unfriendUser")
    public ResponseEntity<String> unfriendUser(@RequestBody Map<String,String> payLoad){
        String userEmail = payLoad.get("user_email");
        return userService.unfriendUser(userEmail);
    }

    @PostMapping("/cancelFriendReq")
    public ResponseEntity<String> cancelFriendRequest(@RequestBody Map<String,String> payLoad){
        String userEmail = payLoad.get("user_email");
        return userService.cancelFriendRequest(userEmail);
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

    @GetMapping("/allFriends")
    public ResponseEntity<List<SecuredUserDto>> getAllFriends(){
        List<SecuredUserDto> friends = userService.getFriends();
        return new ResponseEntity<>(friends,HttpStatus.OK);
    }

    @GetMapping("/friendRequests")
    public ResponseEntity<List<SecuredUserDto>> getAllFriendRequests(){
        List<SecuredUserDto> friends = userService.getAllFriendRequests();
        return new ResponseEntity<>(friends,HttpStatus.OK);
    }

    @GetMapping("/allFollowers")
    public ResponseEntity<List<SecuredUserDto>> getAllFollowers(){
        List<SecuredUserDto> friends = userService.getFollowers();
        return new ResponseEntity<>(friends,HttpStatus.OK);
    }

    @GetMapping("/allFollowings")
    public ResponseEntity<List<SecuredUserDto>> getAllFollowings(){
        List<SecuredUserDto> friends = userService.getFollowings();
        return new ResponseEntity<>(friends,HttpStatus.OK);
    }

    @GetMapping("/sentRequests")
    public ResponseEntity<List<SecuredUserDto>> getAllSentFriendRequests(){
        List<SecuredUserDto> friends = userService.getAllSentFriendRequests();
        return new ResponseEntity<>(friends,HttpStatus.OK);
    }

}
