package com.Cranco.Cranco.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        newPost.setLocation(request.getImageLocation());
        newPost.setCaption(request.getCaption());

        Post savePost = postRepository.save(newPost);
        return mapToDo(savePost);
    }

    public PostDto mapToDo(Post post){
        PostDto dto =new PostDto();
        dto.setId(post.getId());
        dto.setCaption(post.getCaption());
        dto.setLocation(post.getLocation());
        dto.setUsername(post.getUsername());

        return dto;

    }

}
