package com.Cranco.Cranco.repo;

import com.Cranco.Cranco.model.User;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface UserRepo extends Neo4jRepository<User,Integer> {

}
