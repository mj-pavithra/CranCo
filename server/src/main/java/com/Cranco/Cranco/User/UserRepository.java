package com.Cranco.Cranco.User;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends Neo4jRepository<User, Long> {
    @Query("MATCH (u:USER) WHERE u.email = $email RETURN u LIMIT 1")
    Optional<User> findByEmail(String email);
    User findByUsername(String username);

    //@Query("MATCH (c:USER)\n" + "RETURN c;")
    @Query("MATCH (user:User)\n" + "RETURN user.userId AS userId, user.username AS username, user.email AS email, user.role AS role")

    List<User> findAllByOrderByUserIdASC();
}
