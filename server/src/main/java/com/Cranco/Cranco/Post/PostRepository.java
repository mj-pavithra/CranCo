package com.Cranco.Cranco.Post;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends Neo4jRepository<Post, Long> {
    Optional<Post> findById(Long postId);

    @Query("MATCH (c:POST)\n" + "RETURN c;")
    List<Post> findAllByOrderByPostIdASC();
}

