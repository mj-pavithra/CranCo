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

    @Query("MATCH (u:USER {email: $email}) SET u.coverPhoto = $coverPhoto RETURN u.email")
    String updateCoverPhoto(@Param("email") String email, @Param("coverPhoto") String coverPhoto);


    @Query("MATCH (u:USER {email:$email}) RETURN u.coverPhoto  ")
    String getCoverPhoto(@Param("email") String userID);
    @Query("MATCH (u:USER {email: $email}) SET u.profile_picture = $profile_picture RETURN u.email")
    String updateProPic(@Param("email") String email, @Param("profile_picture") String profile_picture);
    @Query("MATCH (u:USER {user_name:$email}) RETURN u.profile_picture  ")
    String getProPic(@Param("email") String userID);

    //@Query("MATCH (c:USER)\n" + "RETURN c;")
    @Query("MATCH (user:USER) RETURN user")
    List<User> findAllByOrderByUserIdASC();

    @Query("MATCH (u:USER) RETURN count(u) as UserCount")
    long getUserCount();

    @Query("MATCH (user:USER) WHERE user.username CONTAINS $username RETURN user")
    List<User> searchUsers(long username);

//    List<User> searchUsers(String );

//    @Query("MATCH (u:User) WHERE u.userId = $userId RETURN count(u)")
//    long countUsersByUserId(@Param("userId") String userId);
}
