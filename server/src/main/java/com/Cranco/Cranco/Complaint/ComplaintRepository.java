package com.Cranco.Cranco.Complaint;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintRepository extends Neo4jRepository<Complaint, Long> {

}
