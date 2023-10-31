package com.Cranco.Cranco.Post;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/posts")
@AllArgsConstructor
public class PostController {
    private final PostService postService;

//        @Autowired
//        public PostController(PostService postService) {
//            this.postService = postService;
//        }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<PostDto> createPost(
            @RequestParam("caption") String caption,
            @RequestParam("userId") String userIdString,
            @RequestParam("username") String username,
            @RequestParam(value = "type", required = false) String postType,
            @RequestParam(value = "visibility",required = false) String visibility,


            @RequestParam(value = "images", required = false) List<MultipartFile> images) {
        Long userId = Long.parseLong(userIdString);
        if (images != null) {
            System.out.println("Received images:");
            for (MultipartFile image : images) {
                System.out.println(image.getOriginalFilename());
            }
        } else {
            System.out.println("No images received.");
        }
        CreatePost newPost = new CreatePost();
        newPost.setType(postType);
        newPost.setVisibility(visibility);
        newPost.setCaption(caption);
        newPost.setUserId(userId);
        newPost.setUsername(username);

        PostDto createPost = postService.createPost(newPost, images);
        return ResponseEntity.ok(createPost);
    }

    @GetMapping("/feed")
    public ResponseEntity<List<PostDto>> getAllPosts() {
        try {
            List<PostDto> allPosts = postService.getAllPosts();
            allPosts.forEach(post -> System.out.println("PostID: " + post.getPostId()));
            allPosts.forEach(post-> System.out.println("Comment count: " + post.getCommentCount()));
            allPosts.forEach(post-> System.out.println("Like count: " + post.getLikeCount()));

            return ResponseEntity.ok(allPosts);
        } catch (Exception e) {
            // Log the exception for debugging purposes.
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/delete/{postID}")
    public ResponseEntity<String> deleteAPost(@PathVariable("postID") Long postID) {
        System.out.println("deleting post: " + postID);
        try {
            postService.deletePostById(postID);
            return ResponseEntity.ok("Post deleted successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete the post");
        }
    }



    @PutMapping("/liked")
    public ResponseEntity<ReactDto> RecordLike(
            @RequestParam("liked") String liked,
            @RequestParam("userEmail") String userEmail,
            @RequestParam("postID") String postIDString){
        Long postID = Long.parseLong(postIDString);

        React newReact = new React();
        newReact.setLiked(liked);
        newReact.setEmail(userEmail);
        newReact.setPostID(postID);
        ReactDto react = postService.recordReactOnPost(newReact);
        return ResponseEntity.ok(react);
    }

    @PostMapping ("/writeComment")
    public ResponseEntity<CommnetDto> WriteComment(
            @RequestParam("userId") String userIdString,
            @RequestParam("comment") String comment,
            @RequestParam("postID") String postIDString,
            @RequestParam("postOwnerID") Long postOwnerID
    ) {
        Long userID = Long.parseLong(userIdString);
        Long postID = Long.parseLong(postIDString);
        Commnet newCommnet = new Commnet();
        newCommnet.setPostOwnerID(postOwnerID);
        newCommnet.setCommnetText(comment);
        newCommnet.setPostID(postID);
        newCommnet.setUserID(userID);

        CommnetDto commentReturn = postService.writeComment(newCommnet);

        return null;
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