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
    
    //@Query("MATCH (c:POST)\n" + "RETURN c;")
    @Query("MATCH (post:POST) RETURN post.username AS username, post.caption AS caption, post.postId AS postId")
    List<Post> findAllByOrderByPostIdASC();

    @Query("MATCH (p:POST) RETURN count(p) as PostCount")
    long getPostCount();

    @Query("MATCH (post:POST) WHERE post.postId CONTAINS $postId RETURN post")
    List<Post> searchPosts(long postId);

    //void deletePost(long postId);

//    List<Post> searchPosts(String caption);
}

