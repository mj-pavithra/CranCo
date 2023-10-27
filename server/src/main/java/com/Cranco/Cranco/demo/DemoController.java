package com.Cranco.Cranco.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/demo-controller")
public class DemoController {

    @GetMapping
    public ResponseEntity<String> sayHello() {
        System.out.println(SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        return ResponseEntity.ok("Hello from secured endpoint");
    }

}
