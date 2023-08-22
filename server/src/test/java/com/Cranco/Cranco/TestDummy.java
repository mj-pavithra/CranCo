package com.Cranco.Cranco;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.neo4j.driver.Record;
import org.neo4j.driver.Result;
import org.neo4j.driver.Session;
import org.neo4j.driver.Transaction;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DisplayName("Test Dummy Operations")
public class TestDummy extends TestConnection {

    @DisplayName("Test creating and reading a dummy node")
    @Test
    void testCreateAndReadDummy() {
        // Create a dummy node with some properties
        try (Session session = driver.session()) {
            try (Transaction tx = session.beginTransaction()) {
                tx.run("CREATE (d:Dummy {name: 'Foo', age: 42})");
                tx.commit();
            }
        }

        // Get back all data from the database
        try (Session session = driver.session()) {
            try (Transaction tx = session.beginTransaction()) {
                Result result = tx.run("MATCH (n) RETURN n");
                List<Record> records = result.list();
                // Check that there is only one record
                assertEquals(1, records.size());
                // Check that the record contains a dummy node with the expected properties
                Record record = records.get(0);
                assertEquals("Foo", record.get("n").get("name").asString());
                assertEquals(42, record.get("n").get("age").asInt());
                tx.commit();
            }
        }

        try (Session session = driver.session()) {
            Result result = session.run("MATCH (n:Dummy) RETURN n.name, n.age");
            while (result.hasNext()) {
                Record record = result.next();
                System.out.println("Name: " + record.get("n.name").asString());
                System.out.println("Age: " + record.get("n.age").asInt());
            }
        }
    }
}
