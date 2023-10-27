package com.Cranco.Cranco.Token;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Property;

import javax.persistence.GeneratedValue;

@Node("TOKEN")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Token {
    @Id
    @GeneratedValue
    public Long id;

    @Property("token_string")
    public String token;

    @Property("revoked")
    public boolean revoked;

    @Property("expired")
    public boolean expired;

    @Property("user_id")
    public String user_id;

    @Property("refresh")
    public boolean refresh;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
//    public User user;
}
