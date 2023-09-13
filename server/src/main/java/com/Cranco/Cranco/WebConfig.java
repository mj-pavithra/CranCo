package com.Cranco.Cranco;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        Path uploadDir = Paths.get("./src/main/resources/static/");
        registry
                .addResourceHandler("/static/**")
                .addResourceLocations("file:"+uploadDir.toFile().getAbsolutePath()+"/");
    }
}
