package com.college.clubportalapi.service;

import com.college.clubportalapi.exception.ResourceNotFoundException;
import com.college.clubportalapi.model.Club;
import com.college.clubportalapi.repo.ClubRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClubService {
    @Autowired
    private ClubRepo cRepo;

    public List<Club> getAllClubs() {
        return cRepo.findAll();
    }

    public Club getClubById(String id) {
        return cRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Club not found with id: " + id));
    }
}