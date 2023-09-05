package com.Cranco.Cranco.BusinessUser;

import com.Cranco.Cranco.User.User;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BusinessUserRepository extends Neo4jRepository<BusinessUser, Long> {

    List<BusinessUser> findByEmail(String email);
}
