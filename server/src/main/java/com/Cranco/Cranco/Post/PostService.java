package com.Cranco.Cranco.Post;

import com.Cranco.Cranco.Notification.Notification;
import com.Cranco.Cranco.Notification.NotificationService;
import com.Cranco.Cranco.User.User;
import javax.persistence.EntityNotFoundException;

import com.Cranco.Cranco.User.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
//import org.springframework.data.neo4j.core.
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;


    public PostDto createPost(CreatePost request, List<MultipartFile> images) {
        Post newPost = new Post();
        newPost.setUsername(request.getUsername());
        newPost.setCaption(request.getCaption());

        long uniquePostId = generateUniquePostId();
        List<String> imageLocations = new ArrayList<>();
        LocalDateTime currentDateTime = LocalDateTime.now();
        newPost.setDate(currentDateTime);
        newPost.setId(uniquePostId);


        if (images != null && !images.isEmpty()) {
            for (int i = 0; i < images.size(); i++) {
                MultipartFile image = images.get(i);
                String imageFileName = uniquePostId + i + "." + getExtensionFromFileName(Objects.requireNonNull(image.getOriginalFilename()));
                saveImage(imageFileName, image);
                imageLocations.add( imageFileName);
            }
        }

        newPost.setLocation(imageLocations.toString());
        newPost.setId(uniquePostId);
        Post savePost = postRepository.save(newPost);
        PostDto postDto = mapToDto(savePost);
        postDto.setImageLocations(imageLocations);



        return postDto;
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

    public PostDto mapToDto(Post post){
        PostDto dto = new PostDto();
        dto.setId(post.getId());
        dto.setCaption(post.getCaption());
        dto.setLocation(post.getLocation());
        dto.setUsername(post.getUsername());
        dto.setLikedCount(post.getLikedCount());
        dto.setDate(post.getDate());
        return dto;
    }

    public List<Post> getAllPostsSortedByPostId() {
        return postRepository.findAllByOrderByPostIdASC();
    }

    public void updatePostdetails(long postId){
        Post post = postRepository.findById(postId).orElseThrow(() -> new IllegalStateException("Post with id " + postId + " does not exist"));
        post.setCaption(post.getCaption());
        postRepository.save(post);
    }
    public void deletePost(Long postId) {
        postRepository.deleteById(postId);
    }
    private Long generateUniquePostId() {
        return UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE;
    }
    



    public List<PostDto> getAllPosts() {
        List<Post> posts = postRepository.findAll();

        Collections.shuffle(posts);

        List<Post> randomPosts = posts.stream().limit(10).toList();
        for (Post post : randomPosts) {
            int likedCount = postRepository.getLikedCount(post.getId());
            post.setLikedCount(likedCount);
            System.out.println(post.getLikedCount());
            System.out.println("ME thama post eka thule thiyana euwa"+ post.getCaption());
        }

        return randomPosts.stream().map(this::mapToDtoWithImages).collect(Collectors.toList());
    }

    public PostDto mapToDtoWithImages(Post post) {
        PostDto dto = mapToDto(post);
        System.out.println(post);
        // Retrieve image locations for the post and set them in the DTO
        List<String> imageLocations = Arrays.asList(post.getLocation().split(","));
        dto.setImageLocations(imageLocations);
        return dto;
    }

    public void deletePostById(Long postID) {
        // Check if the post exists
        if (postRepository.existsById(postID)) {
            postRepository.deleteById(postID);
        } else {
            throw new EntityNotFoundException("Post not found with ID: " + postID);
        }
    }


    public ReactDto recordReactOnPost(React react) {
        if ("liked".equals(react.getLiked())) {
//            notificationService.createNotification()
            createOrUpdateLikedRelationship(react.getUserID(), react.getPostID());
        } else if ("disliked".equals(react.getLiked())) {
            removeLikedRelationship(react.getUserID(), react.getPostID());
        }

        return new ReactDto(react.getUserID(), react.getLiked(), react.getPostID());
    }

    public void createOrUpdateLikedRelationship(Long userID, Long postID) {
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userID));
        System.out.println("like in post service wada");
        user.likesPost(userID, postID);
        userRepository.save(user);
    }
    private void removeLikedRelationship(Long userID, Long postID) {
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userID));
        System.out.println("dislike in post service wada");
        user.unlikes(userID, postID);
        userRepository.save(user);
    }

    public long getPostCount() {
        return postRepository.getPostCount();
    }

}
