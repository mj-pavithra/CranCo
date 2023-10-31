package com.Cranco.Cranco.User;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends Neo4jRepository<User, Long> {
    @Query("MATCH (u:USER) WHERE u.email = $email RETURN u LIMIT 1")
    Optional<User> findByEmail(String email);
    User findByUsername(String username);

    Optional<User> findById(Long userID);

    @Query("MATCH (u:USER) WHERE u.email = $email RETURN u.id")
    Long getUserIdByEmail(@Param("email") String email);

    @Query("MATCH (u:USER {id:@userID}) SET n.coverPhoto = $coverPhoto ")
    Optional<User> updateCoverPhoto(@Param("userID") Long userID, @Param("coverPhoto") String coverPhoto);
    @Query("MATCH (u:USER {id:@userID}) SET n.profile_picture = $profile_picture ")
    Optional<User> updateProPic(@Param("userID") Long userID, @Param("profile_picture") String proPic);

    //@Query("MATCH (c:USER)\n" + "RETURN c;")
    @Query("MATCH (user:USER) RETURN user")
    List<User> findAllByOrderByUserIdASC();

    @Query("MATCH (u:USER) RETURN count(u) as UserCount")
    long getUserCount();

    @Query("MATCH (user:USER) WHERE user.username CONTAINS $username RETURN user")
    List<User> searchUsers(long username);

    @Query("match (p:USER {email: $senderEmail}) match (d:USER {email: $receiverEmail}) merge (p)-[:FRIEND_REQ]->(d)")
    void createFriendReq(String senderEmail, String receiverEmail);

//    List<User> searchUsers(String );

//    @Query("MATCH (u:User) WHERE u.userId = $userId RETURN count(u)")
//    long countUsersByUserId(@Param("userId") String userId);
}
