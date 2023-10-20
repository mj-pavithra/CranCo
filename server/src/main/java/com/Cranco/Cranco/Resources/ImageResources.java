package com.Cranco.Cranco.Resources;

import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/resources")
public class ImageResources {
    private final ResourceLoader resourceLoader;

    public ImageResources(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @GetMapping("images/{imageName}")
    public ResponseEntity<Resource> getImage(@PathVariable String imageName) {
        try {
            Resource resource = resourceLoader.getResource("classpath:static/PostImages/" + imageName);

            if (resource.exists()) {
                MediaType mediaType = MediaType.IMAGE_JPEG;
                return ResponseEntity.ok().contentType(mediaType).body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("secured-images/{imageName}")
    public ResponseEntity<Resource> getSecuredImage(@PathVariable String imageName) {
        try {
            Resource resource = resourceLoader.getResource("classpath:static/PostImages/secured" + imageName);

            if (resource.exists()) {
                MediaType mediaType = MediaType.IMAGE_JPEG;
                return new ResponseEntity<>(resource,HttpStatus.OK);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
