package com.college.clubportalapi.repo;

import com.college.clubportalapi.model.Club;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClubRepo extends MongoRepository<Club, String> {}