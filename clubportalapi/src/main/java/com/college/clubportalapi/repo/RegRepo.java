package com.college.clubportalapi.repo;

import com.college.clubportalapi.model.Registration;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface RegRepo extends MongoRepository<Registration, String> {
  List<Registration> findByClubId(String clubId);
}