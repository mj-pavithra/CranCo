//package com.Cranco.Cranco.Config;
//
//import org.springframework.context.annotation.Configuration;
//
////package com.Cranco.Cranco.Config;
////
//@Configuration
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.cors();
//        // other security configurations
//    }
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.addAllowedOrigin("http://your-frontend-url");
//        configuration.addAllowedHeader("*");
//        configuration.addAllowedMethod("*");
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
//}
//    Check the React Frontend:
//
//        Ensure that your React frontend is sending the JWT token in the headers correctly. You mentioned that it appears in the network tab, so it's likely not the problem, but double-check that the token is being added to the Authorization header.
//        Use a library like Axios or Fetch API in your React app to make sure you're sending the request with the JWT token.
//        javascript
//        Copy code
//        fetch('http://your-api-endpoint', {
//        method: 'GET',
//        headers: {
//        'Authorization': `Bearer ${yourJWTToken}`
//        },
//        })
//        .then(response => {
//        // Handle the response
//        })
//        .catch(error => {
//        // Handle errors
//        });
//        Token Parsing and Validation:
//
//        Ensure your Spring Boot backend is correctly parsing and validating the JWT token. You should verify the token's signature, expiration, and audience (if applicable).
//        If the token is not valid, it may result in authentication failures. You can use libraries like jjwt to help with JWT processing in Java.
//        Verify the JWT Token:
//
//        Make sure the JWT token you receive in your React frontend is indeed valid and contains the necessary information.
//        You can decode and inspect the token payload to check its content.
//        If you've verified and addressed the above points and are still facing issues, you might consider providing more specific information about the error messages or log entries for a more targeted solution. Additionally, inspecting the browser's developer console for any JavaScript errors or failed network requests can be helpful in diagnosing the problem.
//
//
//
//
//
//
