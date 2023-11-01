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

    //@Query("MATCH (c:USER)\n" + "RETURN c;")
    @Query("MATCH (user:USER) RETURN user.username, user.email, user.role")
    List<User> findAllByOrderByUserIdASC();

    @Query("MATCH (u:USER) RETURN count(u) as UserCount")
    long getUserCount();

    @Query("MATCH (user:USER) WHERE user.username CONTAINS $username RETURN user")
    List<User> searchUsers(long username);

//    List<User> searchUsers(String );

//    @Query("MATCH (u:User) WHERE u.userId = $userId RETURN count(u)")
//    long countUsersByUserId(@Param("userId") String userId);
}
