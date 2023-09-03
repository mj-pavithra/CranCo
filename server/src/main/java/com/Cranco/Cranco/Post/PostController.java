    package com.Cranco.Cranco.Post;

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;
    import org.springframework.web.multipart.MultipartFile;
    import java.util.List;
    import org.springframework.http.MediaType;




    @RestController
    @CrossOrigin
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
            System.out.println("hello");
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
    }
