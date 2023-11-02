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
    @Query("MATCH (u:USER) WHERE u.user_name = $user_name RETURN u.id")
    Long findUserIByUsername(@Param("user_name") String username);

    Optional<User> findById(Long userID);

    @Query("MATCH (u:USER) WHERE u.email = $email RETURN u.id")
    Long getUserIdByEmail(@Param("email") String email);

    @Query("MATCH (u:USER {email:$email}) RETURN u.coverPhoto  ")
    String getCoverPhoto(@Param("email") String userID);
    @Query("MATCH (u:USER {email: $email}) SET u.profile_picture = $profile_picture RETURN u.email")
    String updateProPic(@Param("email") String email, @Param("profile_picture") String profile_picture);
    @Query("MATCH (u:USER {user_name:$email}) RETURN u.profile_picture  ")
    String getProPic(@Param("email") String userID);

    //@Query("MATCH (c:USER)\n" + "RETURN c;")
    @Query("MATCH (user:USER) RETURN user.username, user.email, user.role")
    List<User> findAllByOrderByUserIdASC();

    @Query("MATCH (u:USER) RETURN count(u) as UserCount")
    long getUserCount();

    @Query("MATCH (user:USER) WHERE user.username CONTAINS $username RETURN user LIMIT 1")
    List<User> searchUsers(long username);

    @Query("match (p:USER {email: $senderEmail}) match (d:USER {email: $receiverEmail}) merge (p)-[:FRIEND_REQ]->(d)")
    void createFriendReq(String senderEmail, String receiverEmail);

    @Query("match (p:USER {email: $senderEmail})-[r:FRIEND_REQ]->(d:USER {email: $receiverEmail}) DELETE r")
    void cancelFriendReq(String senderEmail, String receiverEmail);

    @Query("MATCH (s:USER)-[:FRIEND_REQ]->(u:USER {email : $userEmail}) return s.email")
    List<String> findAllReceivedFriendRequests(String userEmail);

    @Query("MATCH (s:USER)-[:FRIEND_REQ]->(u:USER {email : $userEmail}) return s")
    List<User> getAllFriendRequests(String userEmail);

    @Query("MATCH (u:USER {email : $userEmail})-[:FRIEND_REQ]->(s:USER) return s.email")
    List<String> findAllSentFriendRequests(String userEmail);

    @Query("MATCH (sender:USER {email: $requestSenderEmail})-[req:FRIEND_REQ]->(receiver:USER {email: $acceptorEmail}) DELETE req CREATE (sender)-[:FRIEND]->(receiver)")
    void acceptFriendRequest(String requestSenderEmail, String acceptorEmail);

    @Query("MATCH (u:USER {email: $email})-[:FRIEND]->(o:USER) return o.email")
    List<String> findFriendsMono(String email);

    @Query("match (u:USER {email: $userEmail})-[:FRIEND_REQ]->(p:USER) match (u)<-[:FRIEND_REQ]-(q:USER) with collect(p) + collect(q) as nodez UNWIND nodez as c return distinct c")
    List<User> getAllFriendsAsUsers(String userEmail);

    @Query("MATCH (u1:USER {email: $email1})-[req:FRIEND]->( {email: $email2}) DELETE req")
    void unfriendUser(String email1, String email2);


    @Query("MATCH (n:USER {email: $email})-[:FOLLOW]->(p:USER) return p")
    List<User> getFollowings(String email);

    @Query("MATCH (p:user)-[:FOLLOW]->(n:USER {email: $email}) return p")
    List<User> getFollowers(String email);

    @Query("match (p:USER {email: $senderEmail}) match (d:USER {email: $receiverEmail}) merge (p)-[:FOLLOW]->(d)")
    void followUser(String senderEmail, String receiverEmail);

    @Query("MATCH (u1:USER {email: $email1})-[req:FOLLOW]->( {email: $email2}) DELETE req")
    void unFollowUser(String email1, String email2);

    @Query("MATCH (u:USER {email : $userEmail})-[:FRIEND_REQ]->(s:USER) return s")
    List<User> getAllSentFriendRequests(String userEmail);


    @Query("MATCH (u:USER {email: $requestSender})-[r:FRIEND_REQ]->(t:USER {email: $userEmail}) DELETE r")
    void rejectFriendRequest(String requestSender, String userEmail);
}
