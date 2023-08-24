package com.Cranco.Cranco.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public PostDto createPost(CreatePost request){
        Post newPost = new Post();
        newPost.setUsername(request.getUserId());
        newPost.setCaption(request.getCaption());

        List<String> imageLocations = new ArrayList<>();
        List<Image> images = request.getImages();
        if (images != null && !images.isEmpty()) {
            for (int i = 0; i < images.size(); i++) {
                Image image = images.get(i);
                String imageFileName = generateUniquePostId() + i + "." + image.getExtension();
                saveImage(imageFileName, image.getData());
                imageLocations.add("resources/" + imageFileName);
            }
        }
        newPost.setImageLocations(imageLocations); // Set image locations in the Post entity

        Post savePost = postRepository.save(newPost);
        PostDto postDto = mapToDto(savePost);
        postDto.setImageLocations(imageLocations);
        return postDto;
    }

    private PostDto mapToDto(Post savePost) {
        PostDto dto = new PostDto();
        dto.setPostId(savePost.getpostId());
        dto.setCaption(savePost.getCaption());
        dto.setLocation(savePost.getLocation());
        dto.setUsername(savePost.getUsername());
        return dto;
    }


    private String generateUniquePostId() {
        return UUID.randomUUID().toString();
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
