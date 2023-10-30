package com.Cranco.Cranco.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
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
    @PostMapping(value = "/uploadCoverPhoto", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> updateCoverphoto(@RequestPart("coverPhoto") MultipartFile coverPhoto,
                                                   @RequestPart("userId") String userIdString) {
        Long userId = Long.parseLong(userIdString);
        String result = userService.updateCoverphoto(coverPhoto, userId);
        System.out.println("coverphoto recived");
        return ResponseEntity.ok(result);
    }

    @PostMapping(value = "/uploadProPic", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> updateProPic(@RequestPart("proPic") MultipartFile coverPhoto,
                                                   @RequestPart("userId") String userIdString) {
        Long userId = Long.parseLong(userIdString);
        String result = userService.updateCoverphoto(coverPhoto, userId);
        System.out.println("proPic recived");
        return ResponseEntity.ok(result);
    }

    @GetMapping("/validate-token")
    public ResponseEntity<String> validateToken(){
        return new ResponseEntity<>("valid token", HttpStatus.OK);
    }
}
