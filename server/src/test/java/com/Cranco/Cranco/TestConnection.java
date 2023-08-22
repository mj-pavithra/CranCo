package com.Cranco.Cranco;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.neo4j.driver.Driver;
import org.neo4j.driver.GraphDatabase;
import org.testcontainers.containers.Neo4jContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.junit.jupiter.api.Assertions.assertTrue;

@Testcontainers
public class TestConnection {

    @Container
    private static final Neo4jContainer<?> neo4jContainer = new Neo4jContainer<>("neo4j:latest").withAdminPassword(null);

    protected static Driver driver;

    @BeforeAll
    static void setup() {
        // Initialize the driver with the Bolt URL of the container
        driver = GraphDatabase.driver(neo4jContainer.getBoltUrl());
    }

    @AfterAll
    static void teardown() {
        // Close the driver when done
        driver.close();
    }

    @Test
    void testConnection() {
        // Test that the connection can be established without exceptions
        try {
            driver.verifyConnectivity();
            assertTrue(true, "Connection to Neo4j succeeded.");
        } catch (Exception e) {
            assertTrue(false, "Connection to Neo4j failed: " + e.getMessage());
        }
    }
}
