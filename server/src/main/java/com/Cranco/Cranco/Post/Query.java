//package com.Cranco.Cranco.Post; // Make sure the package declaration matches your project structure
//
//import org.springframework.data.neo4j.annotation.Query;
//
//public interface Query {
//
//    // Cypher query to create or update the "LIKED" relationship
//    @Query("MATCH (u:User {id: $userID}), (p:Post {id: $postID}) " +
//            "MERGE (u)-[r:LIKED]->(p) " +
//            "ON CREATE SET r.timestamp = timestamp()")
//    void createOrUpdateLikedRelationship(String userID, String postID);
//
//    // Cypher query to remove the "LIKED" relationship
//    @Query("MATCH (u:User {id: $userID})-[r:LIKED]->(p:Post {id: $postID}) DELETE r")
//    void removeLikedRelationship(String userID, String postID);
//}