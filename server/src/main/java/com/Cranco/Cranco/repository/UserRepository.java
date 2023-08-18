package com.Cranco.Cranco.repository;

import com.Cranco.Cranco.model.User;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends Neo4jRepository<User,Integer> {
    Optional<User> findByUserId(int userId);
}
