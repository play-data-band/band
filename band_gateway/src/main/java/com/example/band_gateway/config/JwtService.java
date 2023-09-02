package com.example.band_gateway.config;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class JwtService {
    // msa service 들 sercet data 넣으면 runTime 될거고 그 전엔 error 날거임..
    @Value("${jwt.secret}")
    private String secret;
    public Boolean parseToken(String token){
        try{
            Claims body = (Claims) Jwts.parserBuilder()
                    .setSigningKey(secret.getBytes())
                    .build()
                    .parse(token)
                    .getBody();
            TokenInfo info = TokenInfo.builder()
                    .id(UUID.fromString(body.get("id", String.class)))
                    .number(body.get("number", String.class))
                    .name(body.get("name", String.class))
                    .role(body.get("role", String.class))
                    .build();
            return true;
        }catch (Exception e){
            return false;
        }

    }


}
