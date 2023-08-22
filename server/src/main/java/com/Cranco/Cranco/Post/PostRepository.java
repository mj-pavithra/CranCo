package com.Cranco.Cranco.Post;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostRepository extends Neo4jRepository<Post,Long> {
    Optional<Post> findByPostId(String postId);
}
