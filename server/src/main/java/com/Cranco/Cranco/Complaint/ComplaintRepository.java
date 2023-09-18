package com.Cranco.Cranco.Complaint;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComplaintRepository extends Neo4jRepository<Complaint, Long> {
    List<Complaint> findByPostId(long postId);
    @Query("MATCH (c:Report)\n" + "RETURN c;")
    List<Complaint> findAllByOrderByPostIdASC();
}