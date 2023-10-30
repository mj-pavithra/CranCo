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
    @Query("MATCH (n:POST {postId: $postId})\n" +
            "DETACH DELETE n;")
    void deleteById(@Param("postId") Long postId);

    @Query("MATCH (:POST {postId: $postId})<-[r:LIKED]-() RETURN COUNT(r) AS likedCount")
    int getLikedCount(@Param("postId") Long postId);

    @Query("MATCH (:POST {postId: $postId})<-[r:gotcomment]-() RETURN COUNT(r) AS commentCount")
    int getCommentCount(@Param("postId") Long postId);
    @Query("MATCH (c:POST)\n" + "RETURN c;")
    List<Post> findAllByOrderByPostIdASC();

    @Query("MATCH (p:Post {postId: $postId}), (u:User {id: $userId})\n" +
            "CREATE (c:Comment {text: $commentText})\n" +
            "CREATE (c)-[:gotcomment]->(p)\n" +
            "CREATE (u)-[:commented]->(c)")
    void createCommnet(@Param("postId") Long postId, @Param("id") Long userID, @Param("commentIext") String commentText);

    @Query("MATCH (p:POST {postId: $postID})\n" +
            "RETURN p.username\n")
    String getPostOwner(@Param("postID") Long postID);
}

