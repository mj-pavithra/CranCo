package com.Cranco.Cranco.Profile;

import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface ProfileRepository extends Neo4jRepository<Profile, Long> {
    Profile findByid(Long id);
}
