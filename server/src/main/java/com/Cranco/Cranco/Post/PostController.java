package com.Cranco.Cranco.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/all")
    public ResponseEntity<List<Post>> getAllPostsSortedByPostId() {
        try {
            List<Post> postList = postService.getAllPostsSortedByPostId();
            return ResponseEntity.ok(postList);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

//    @PutMapping("/{postId}")
//    public ResponseEntity<Post> updatePostDetails(@PathVariable Long postId, @RequestBody PostDto postDto) {
//        try {
//            Post Post = postService.updatePostdetails(postId, postDto);
//            return ResponseEntity.ok(post);
//        } catch (Exception ex) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }

    @DeleteMapping("{postId}")
    public ResponseEntity<Post> deletePost(@PathVariable Long postId) {
        try {
            postService.deletePost(postId);
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
