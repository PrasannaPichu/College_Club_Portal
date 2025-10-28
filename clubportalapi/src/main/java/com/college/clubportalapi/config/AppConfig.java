package com.college.clubportalapi.config;

import com.college.clubportalapi.model.User;
import com.college.clubportalapi.repo.UserRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration // <-- Make sure this annotation is present
public class AppConfig {

    @Bean // <-- This annotation is CRITICAL for creating the PasswordEncoder
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // This Bean creates the default admin user
    @Bean
    CommandLineRunner commandLineRunner(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepo.findByUsername("admin").isEmpty()) {
                User adminUser = new User();
                adminUser.setUsername("admin");
                adminUser.setPassword(passwordEncoder.encode("admin123")); 
                adminUser.setRole("ROLE_ADMIN");
                userRepo.save(adminUser);
                System.out.println(">>> Created default admin user with password 'admin123' <<<");
            }
        };
    }
}