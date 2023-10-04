package com.Cranco.Cranco.User;

//import org.neo4j.ogm.session.Session;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends Neo4jRepository<User,Long> {

//    private final Session
    List<User> findByEmail(String email);



}
