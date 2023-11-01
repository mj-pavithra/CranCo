package com.Cranco.Cranco.Soul;

import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SoulRepository extends Neo4jRepository<Soul, Long> {
    List<Soul> findByVehicleRegNo(String vehicleRegNo);
}
