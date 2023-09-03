package com.Cranco.Cranco.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class PostService {
    private PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository){
        this.postRepository = postRepository;
    }

    public PostDto createPost(CreatePost request, List<MultipartFile> images) {
        Post newPost = new Post();
        newPost.setUsername(request.getUserId());
        newPost.setCaption(request.getCaption());

        Long uniquePostId = generateUniquePostId();
        List<String> imageLocations = new ArrayList<>();

        if (images != null && !images.isEmpty()) {
            for (int i = 0; i < images.size(); i++) {
                MultipartFile image = images.get(i);
                String imageFileName = uniquePostId + i + "." + getExtensionFromFileName(image.getOriginalFilename());
                saveImage(imageFileName, image);
                imageLocations.add("D:\\read-system\\CranCo\\server\\src\\main\\resources\\PostImages\\" + imageFileName);
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
            String uploadDirectory = "D:\\read-system\\CranCo\\server\\src\\main\\resources\\PostImages\\";

            File file = new File(uploadDirectory + fileName);

            // Create the directory if it doesn't exist
            file.getParentFile().mkdirs();

            image.transferTo(file);
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
        return dto;
    }

    private Long generateUniquePostId() {
        return UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE;
    }
    

    private void saveImage(String fileName, byte[] data) {
        try {
            String resourcesPath = "src/main/resources/";
            File file = Paths.get(resourcesPath, fileName).toFile();
            FileOutputStream fos = new FileOutputStream(file);
            fos.write(data);
            fos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
