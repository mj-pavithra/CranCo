package com.Cranco.Cranco.Post;

import com.Cranco.Cranco.User.User;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.Optional;

@Repository
public interface PostRepository extends Neo4jRepository<Post, Long> {

    Optional<Post> findById(Long postId);

    @Query("MATCH (:POST {postId: $postId})<-[r:LIKED]-() RETURN COUNT(r) AS likedCount")
    int getLikedCount(@Param("postId") Long postId);

    @Query("match (u:USER) where id(u)=$userId match (p:POST{postId:$postId}) create (u)-[r:LIKED]->(p) return r")

    Map<String, Object> likePost(@Param("userId")Long userId, @Param("postId")Long postId);
//    @Query("match (u:USER {user_name: $username}) return u")
//    User get_user1(@Param("username") String username);

}

