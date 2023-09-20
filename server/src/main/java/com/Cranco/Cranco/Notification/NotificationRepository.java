package com.Cranco.Cranco.Notification;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface NotificationRepository extends Neo4jRepository<Notification, Long> {

    @Query("MATCH (receiver:User)-[r:RECEIVED]->(n:Notification) " +
            "WHERE id(receiver) = $receiverId AND n.seen = $seen " +
            "RETURN n")
    List<Notification> findByReceiverAndSeen(@Param("receiverId") Long receiverId, @Param("seen") boolean seen);
}
