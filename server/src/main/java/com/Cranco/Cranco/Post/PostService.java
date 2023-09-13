package com.Cranco.Cranco.Post;

import com.Cranco.Cranco.User.User;
import javax.persistence.EntityNotFoundException;

import com.Cranco.Cranco.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.neo4j.core.Neo4jOperations;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
//import org.springframework.data.neo4j.core.
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;
import javax.persistence.EntityNotFoundException;
import com.Cranco.Cranco.User.User;


@Service
public class PostService {
    private PostRepository postRepository;
    private UserRepository userRepository;

    @Autowired
    public PostService(PostRepository postRepository){
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }


    public PostDto createPost(CreatePost request, List<MultipartFile> images) {
        Post newPost = new Post();
        newPost.setUsername(request.getUserId());
        newPost.setCaption(request.getCaption());

        Long uniquePostId = generateUniquePostId();
        List<String> imageLocations = new ArrayList<>();
        LocalDateTime currentDateTime = LocalDateTime.now();
        newPost.setDate(currentDateTime);


        if (images != null && !images.isEmpty()) {
            for (int i = 0; i < images.size(); i++) {
                MultipartFile image = images.get(i);
                String imageFileName = uniquePostId + i + "." + getExtensionFromFileName(image.getOriginalFilename());
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
        dto.setDate(post.getDate());
        return dto;
    }

    private Long generateUniquePostId() {
        return UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE;
    }
    

    private void saveImage(String fileName, byte[] data) {
        try {
            String resourcesPath = "./resources/PostImages/";
            File file = Paths.get(resourcesPath, fileName).toFile();
            FileOutputStream fos = new FileOutputStream(file);
            fos.write(data);
            fos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<PostDto> getAllPosts() {
        List<Post> posts = postRepository.findAll();

        Collections.shuffle(posts);

        List<Post> randomPosts = posts.stream().limit(5).collect(Collectors.toList());

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
            createOrUpdateLikedRelationship(react.getUserID(), react.getPostID());
        } else if ("disliked".equals(react.getLiked())) {
            removeLikedRelationship(react.getUserID(), react.getPostID());
        }

        return new ReactDto(react.getUserID(), react.getLiked(), react.getPostID());
    }

    private void createOrUpdateLikedRelationship(Long userID, Long postID) {
    }


    private void removeLikedRelationship(Long userID, Long postID) {
        User user = userRepository.findById(userID)
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userID));
        Post post = postRepository.findById(postID)
                .orElseThrow(() -> new EntityNotFoundException("Post not found with ID: " + postID));

        user.unlikes(post); // Assuming you have a method 'unlikes' in your User entity
        userRepository.save(user);
    }

}
