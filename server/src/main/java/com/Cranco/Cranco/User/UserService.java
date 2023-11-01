package com.Cranco.Cranco.User;

import com.Cranco.Cranco.Post.Post;
import com.Cranco.Cranco.Post.PostRepository;
import com.Cranco.Cranco.Notification.Notification;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Objects;
import java.util.UUID;

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
            String uploadDirectory = "src/main/resources/static/CoverPhotos/";

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

    public String updateCoverphoto(MultipartFile coverPhoto, Long userID){
        long uniquePostId = generateUniquePostId() % 100000; // Ensure the ID is 5 digits

        String imageFileName = uniquePostId + "." + getExtensionFromFileName(Objects.requireNonNull(coverPhoto.getOriginalFilename()));
        saveImage(imageFileName, coverPhoto);

        userRepository.updateCoverPhoto(userID, imageFileName);
        return ": CP success fully updated";
    }



    public String updatePropic(MultipartFile proPic, Long userID){
        long uniquePostId = generateUniquePostId() % 100000; // Ensure the ID is 5 digits

        String imageFileName = uniquePostId + "." + getExtensionFromFileName(Objects.requireNonNull(proPic.getOriginalFilename()));
        saveImage(imageFileName, proPic);

        userRepository.updateProPic(userID, imageFileName);
        return ": PP success fully updated";
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
