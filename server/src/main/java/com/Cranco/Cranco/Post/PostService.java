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

        String uniquePostId = generateUniquePostId();
        List<String> imageLocations = new ArrayList<>();

        List<Image> images = request.getImages();
        if (images != null && !images.isEmpty()) {
            for (int i = 0; i < images.size(); i++) {
                Image image = images.get(i);
                String imageFileName = uniquePostId + i + "." + image.getExtension();
                saveImage(imageFileName, image.getData());
                imageLocations.add("resources/" + imageFileName);
            }
        }

        newPost.setLocation(imageLocations.toString());

        Post savePost = postRepository.save(newPost);
        PostDto postDto = mapToDto(savePost);
        postDto.setImageLocations(imageLocations);
        return postDto;
    }

    public PostDto mapToDto(Post post){
        PostDto dto = new PostDto();
        dto.setId(post.getId());
        dto.setCaption(post.getCaption());
        dto.setLocation(post.getLocation());
        dto.setUsername(post.getUsername());
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
