    package com.Cranco.Cranco.Post;

    import org.springframework.beans.factory.annotation.Autowired;
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
    public class PostController {
        private final PostService postService;

        @Autowired
        public PostController(PostService postService) {
            this.postService = postService;
        }

        @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
        public ResponseEntity<PostDto> createPost(
                @RequestParam("caption") String caption,

                @RequestParam(value = "images", required = false) List<MultipartFile> images) {
            if (images != null) {
                System.out.println("Received images:");
                for (MultipartFile image : images) {
                    System.out.println(image.getOriginalFilename());
                }
            } else {
                System.out.println("No images received.");
            }
            CreatePost newPost = new CreatePost();
            newPost.setCaption(caption);
            PostDto createPost = postService.createPost(newPost, images);
            return ResponseEntity.ok(createPost);
        }

        @GetMapping("/feed")
        public ResponseEntity<List<PostDto>> getAllPosts() {
            try {
                List<PostDto> allPosts = postService.getAllPosts();
                System.out.println(allPosts);
                return ResponseEntity.ok(allPosts);
            } catch (Exception e) {
                // Log the exception for debugging purposes.
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }

        @DeleteMapping("/delete")
        public ResponseEntity<String> deletePost(@RequestBody Map<String, Long> requestBody) {
            Long postID = requestBody.get("postID");
            // Call the service method to delete the post by postID
            postService.deletePostById(postID);
            return ResponseEntity.ok("Post deleted successfully");
        }

        @GetMapping("/liked")
        public ResponseEntity<ReactDto> RecordLike(
                @RequestParam ("userID") Long userID,
                @RequestParam ("liked") String liked,
                @RequestParam("postID") Long postID){
            React newReact = new React();
            newReact.setLiked(liked);
            newReact.setUserID(userID);
            newReact.setPostID(postID);
            ReactDto react = postService.recordReactOnPost(newReact);
            return ResponseEntity.ok(react);
        }




    }
