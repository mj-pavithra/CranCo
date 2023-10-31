package com.Cranco.Cranco.Complaint;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComplaintRepository extends Neo4jRepository<Complaint, Long> {
    List<Complaint> findByPostId(long postId);

    @Query("MATCH (c:Report) RETURN c;")
    //@Query("MATCH (report:Report) RETURN report.reportId AS reportId, report.userId AS userId, report.reason AS reason")
    List<Complaint> findAllByOrderByPostIdASC();

    @Query("MATCH (c:Report) RETURN count(c) as ComplaintCount")
    long getComplaintCount();

//    List<Complaint> searchComplaints(String search);

//    @Query("MATCH (c:Report) WHERE c.reportId = $reportId RETURN count(c)")
//    long countComplaintsByreportId(String reportId);
}