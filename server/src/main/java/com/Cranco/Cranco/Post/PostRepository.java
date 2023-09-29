package com.Cranco.Cranco.Post;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends Neo4jRepository<Post, Long> {
    Optional<Post> findById(Long postId);

    @Query("MATCH (:POST {postId: $postId})<-[r:LIKED]-() RETURN COUNT(r) AS likedCount")
    int getLikedCount(@Param("postId") Long postId);
}

