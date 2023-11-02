package com.Cranco.Cranco.User;

import com.Cranco.Cranco.Post.Post;
import com.Cranco.Cranco.Post.PostRepository;
import com.Cranco.Cranco.Notification.Notification;
import jakarta.transaction.Transactional;
import org.jooq.meta.derby.sys.Sys;
import org.neo4j.cypherdsl.core.Use;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

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
        return userRepository.findById(userId).orElseThrow(null);
    }

    private Long generateUniquePostId() {
        return UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE;
    }

    private String getExtensionFromFileName(String fileName) {
        int dotIndex = fileName.lastIndexOf(".");
        if (dotIndex > 0) {
            return fileName.substring(dotIndex + 1);
        }
        return "";
    }

    private void saveImage(String fileName, MultipartFile image) {
        try {
            // Define the directory where you want to save the images
            String uploadDirectory = "src/main/resources/static/PostImages/";

            File directory = new File(uploadDirectory);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            // Create the file in the directory
            File file = new File(directory, fileName);

            // Save the image
            try (FileOutputStream fos = new FileOutputStream(file)) {
                fos.write(image.getBytes());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public String getCoverPhoto (String email){
        return userRepository.getCoverPhoto(email);
    }
    public String getProPic (String email){
        System.out.println( email);
        return userRepository.getProPic(email);
    }

    public String updateCoverphoto(MultipartFile coverPhoto, String email){
        long uniquePostId = generateUniquePostId() % 100000; // Ensure the ID is 5 digits

        String imageFileName = uniquePostId + "." + getExtensionFromFileName(Objects.requireNonNull(coverPhoto.getOriginalFilename()));
        saveImage(imageFileName, coverPhoto);

        System.out.println(imageFileName);
        System.out.println("email" + email);

        String returnValue = userRepository.updateCoverPhoto(email, imageFileName);
        if(Objects.equals(returnValue, email)){
            System.out.println("email" + email);
            System.out.println("returnValue" + returnValue);
            return ": CP success fully updated";
        }
        else {

            return ": CP upload failed ";
        }
    }

    public String updatePropic(MultipartFile proPic, String email){
        long uniquePostId = generateUniquePostId() % 100000; // Ensure the ID is 5 digits

        String imageFileName = uniquePostId + "." + getExtensionFromFileName(Objects.requireNonNull(proPic.getOriginalFilename()));
        saveImage(imageFileName, proPic);

        System.out.println(imageFileName);

        String returnValue = userRepository.updateProPic(email, imageFileName);
        if(Objects.equals(returnValue, email)){
            System.out.println("email" + email);
            System.out.println("returnValue" + returnValue);
            return ": PP success fully updated";
        }
        else {
            return returnValue;
        }

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

    public User findUser(String credential) {
        Optional<User> user = userRepository.findByEmail(credential);
        if (user.isPresent()) {
            return user.get();
        } else {
            Long userId;
            try {
                userId = Long.parseLong(credential);
            } catch (NumberFormatException e) {
                return null;
            }

            Optional<User> user2 = userRepository.findById(userId);
            if (user2.isPresent()) {
                return user2.get();
            } else {
                return null;
            }
        }
    }

    public String getLoggedUserEmail() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    public ResponseEntity<String> sendFriendRequest(String receiverCredential) {
        String userEmail = getLoggedUserEmail();
        Optional<User> senderOpt = userRepository.findByEmail(userEmail);
        if (senderOpt.isEmpty()) {
            return new ResponseEntity<>("Sender no found", HttpStatus.BAD_REQUEST);
        }

        User receiver = findUser(receiverCredential);
        if (receiver == null) {
            return new ResponseEntity<>("Receiver no found", HttpStatus.BAD_REQUEST);
        }

        List<String> receivedRequests = userRepository.findAllReceivedFriendRequests(userEmail);
        System.out.println(receivedRequests);
        if (receivedRequests.contains(receiver.getEmail())) {
            return new ResponseEntity<>("Request already sent", HttpStatus.BAD_REQUEST);
        }

        userRepository.createFriendReq(userEmail, receiver.getEmail());
        return new ResponseEntity<>("Friend request sent", HttpStatus.OK);
    }

    public ResponseEntity<String> cancelFriendRequest(String receiverCredential) {
        String userEmail = getLoggedUserEmail();
        Optional<User> senderOpt = userRepository.findByEmail(userEmail);
        if (senderOpt.isEmpty()) {
            return new ResponseEntity<>("Sender no found", HttpStatus.BAD_REQUEST);
        }

        System.out.println(receiverCredential);
        User receiver = findUser(receiverCredential);
        if (receiver == null) {
            return new ResponseEntity<>("Receiver no found", HttpStatus.BAD_REQUEST);
        }

        userRepository.cancelFriendReq(userEmail, receiver.getEmail());
        return new ResponseEntity<>("Friend request removed", HttpStatus.OK);
    }

    public ResponseEntity<String> acceptFriendRequest(String requestSenderCredential) {
        String userEmail = getLoggedUserEmail();
        Optional<User> accepterOpt = userRepository.findByEmail(userEmail);
        if (accepterOpt.isEmpty()) {
            return new ResponseEntity<>("Acceptor no found", HttpStatus.BAD_REQUEST);
        }
        User acceptor = accepterOpt.get();

        User requestSender = findUser(requestSenderCredential);
        if (requestSender == null) {
            return new ResponseEntity<>("Request sender no found", HttpStatus.BAD_REQUEST);
        }

        List<String> requestSenders = userRepository.findAllReceivedFriendRequests(userEmail);
        System.out.println("the list" + requestSenders);
        if (!requestSenders.contains(requestSender.getEmail())) {
            return new ResponseEntity<>("Request already accepted", HttpStatus.BAD_REQUEST);
        }

        userRepository.acceptFriendRequest(requestSender.getEmail(), userEmail);
        return new ResponseEntity<>("Friend request accepted", HttpStatus.OK);
    }

    public ResponseEntity<String> unfriendUser(String email) {
        String userEmail = getLoggedUserEmail();
        Optional<User> user = userRepository.findByEmail(userEmail);
        if (user.isEmpty()) {
            return new ResponseEntity<>("User not found", HttpStatus.BAD_REQUEST);
        }
        User user1 = user.get();

        User user2 = findUser(email);
        if (user2 == null) {
            return new ResponseEntity<>("User no found", HttpStatus.BAD_REQUEST);
        }

        List<String> friendList1 = userRepository.findFriendsMono(user1.getEmail());
        if (friendList1.contains(user2.getEmail())) {
            userRepository.unfriendUser(user1.getEmail(), user2.getEmail());
            return new ResponseEntity<>("Unfriend successfully", HttpStatus.OK);
        }

        List<String> friendList2 = userRepository.findFriendsMono(user2.getEmail());
        if (friendList2.contains(user1.getEmail())) {
            userRepository.unfriendUser(user2.getEmail(), user1.getEmail());
            return new ResponseEntity<>("Unfriend successfully", HttpStatus.OK);
        }

        return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public List<SecuredUserDto> getAllFriendRequests() {
        List<User> friendRequestsUser = userRepository.getAllFriendRequests(getLoggedUserEmail());
        List<SecuredUserDto> requstList = new ArrayList<>();
        friendRequestsUser.forEach(request -> {
            requstList.add(mapToSecuredDto(request));
        });
        return requstList;
    }

    public ResponseEntity<String> followUser(String receiverCredential) {
        String userEmail = getLoggedUserEmail();
        Optional<User> senderOpt = userRepository.findByEmail(userEmail);
        if (senderOpt.isEmpty()) {
            return new ResponseEntity<>("Sender no found", HttpStatus.BAD_REQUEST);
        }

        User receiver = findUser(receiverCredential);
        if (receiver == null) {
            return new ResponseEntity<>("Receiver no found", HttpStatus.BAD_REQUEST);
        }

        userRepository.followUser(userEmail, receiver.getEmail());
        return new ResponseEntity<>("Followed successfully", HttpStatus.OK);
    }

    public ResponseEntity<String> unfollowUser(String receiverCredential) {
        String userEmail = getLoggedUserEmail();
        Optional<User> senderOpt = userRepository.findByEmail(userEmail);
        if (senderOpt.isEmpty()) {
            return new ResponseEntity<>("Sender no found", HttpStatus.BAD_REQUEST);
        }

        User receiver = findUser(receiverCredential);
        if (receiver == null) {
            return new ResponseEntity<>("Receiver no found", HttpStatus.BAD_REQUEST);
        }

        userRepository.unFollowUser(userEmail, receiver.getEmail());
        return new ResponseEntity<>("unfollow done", HttpStatus.OK);
    }

    public List<SecuredUserDto> getFollowings() {
        String userEmail = getLoggedUserEmail();
        Optional<User> senderOpt = userRepository.findByEmail(userEmail);
        if (senderOpt.isEmpty()) {
            return null;
        }

        List<User> followingUserList = userRepository.getFollowings(userEmail);
        List<SecuredUserDto> followings = new ArrayList<>();
        followingUserList.forEach(followingUser -> {
            followings.add(mapToSecuredDto(followingUser));
        });

        return followings;
    }

    public List<SecuredUserDto> getFollowers() {
        String userEmail = getLoggedUserEmail();
        List<User> followersUser = userRepository.getFollowers(userEmail);

        List<SecuredUserDto> followers = new ArrayList<>();
        followersUser.forEach(followerUser -> {
            followers.add(mapToSecuredDto(followerUser));
        });

        return followers;
    }

    public List<SecuredUserDto> getFriends() {
        List<User> friendList = userRepository.getAllFriendsAsUsers(getLoggedUserEmail());
        List<SecuredUserDto> dtoList = new ArrayList<>();
        friendList.forEach(friend -> {
            dtoList.add(mapToSecuredDto(friend));
        });
        return dtoList;
    }

    public SecuredUserDto mapToSecuredDto(User user) {
        return SecuredUserDto
                .builder()
                .id(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .build();
    }

    public List<SecuredUserDto> getAllSentFriendRequests() {
        List<User> friendRequestsUser = userRepository.getAllSentFriendRequests(getLoggedUserEmail());
        List<SecuredUserDto> requstList = new ArrayList<>();
        friendRequestsUser.forEach(request -> {
            requstList.add(mapToSecuredDto(request));
        });
        return requstList;
    }

    public ResponseEntity<String> rejectFriendRequest(String requestSenderCredential) {
        String userEmail = getLoggedUserEmail();

        User requestSender = findUser(requestSenderCredential);
        if (requestSender == null) {
            return new ResponseEntity<>("Request sender no found", HttpStatus.BAD_REQUEST);
        }

        userRepository.rejectFriendRequest(requestSender.getEmail(), userEmail);
        return new ResponseEntity<>("Friend request rejected", HttpStatus.OK);
    }
}
