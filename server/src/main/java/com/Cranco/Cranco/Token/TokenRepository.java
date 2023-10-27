package com.Cranco.Cranco.Token;

import com.Cranco.Cranco.User.User;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends Neo4jRepository<Token, Long> {
    @Query("MATCH (t:TOKEN) WHERE t.user_id = $id AND t.expired = false OR t.revoked = false RETURN t")
    List<Token> findAllValidTokenByUser(String id);

    @Query("MATCH (t:TOKEN) WHERE t.user_id = $id DELETE t")
    void deleteAllTokensByUser_id(String id);

    @Query("MATCH (t:TOKEN) WHERE t.token_string = $token AND t.refresh = false RETURN t")
    Optional<Token> findByToken(String token);

    @Query("MATCH (t:TOKEN) WHERE t.token_string = $token DELETE t")
    void deleteAllTokensByJwt(String token);

    @Query("MATCH (t:TOKEN) WHERE t.token_string = $token AND t.refresh = true RETURN t")
    List<Token> findRefreshTokens(String token);
}
