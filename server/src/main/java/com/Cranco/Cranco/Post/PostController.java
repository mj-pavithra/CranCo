package com.Cranco.Cranco.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/posts")
public class PostController {
    private final PostService postService;
    @Autowired
    public PostController(PostService postService){ this.postService= postService;}

    @PostMapping
    public ResponseEntity<PostDto> createPost(@RequestBody CreatePost request){
        PostDto createPost = postService.createPost(request);
        return ResponseEntity.ok(createPost);
    }
}
