package com.Cranco.Cranco.Notification;

import java.util.List;

import com.Cranco.Cranco.User.User;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationRepository extends Neo4jRepository<Notification, Integer> {
    List<Notification> findByReceiverAndSeen(User receiver, boolean seen);


}
