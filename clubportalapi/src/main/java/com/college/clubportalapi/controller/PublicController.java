package com.college.clubportalapi.controller;

import com.college.clubportalapi.model.*;
import com.college.clubportalapi.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // This allows React to call it
public class PublicController {

    @Autowired
    private ClubService cService;
    
    @Autowired
    private RegistrationService rService;

    @GetMapping("/clubs")
    public List<Club> getAllClubs() {
        return cService.getAllClubs();
    }

    @GetMapping("/clubs/{id}")
    public ResponseEntity<Club> getClub(@PathVariable String id) {
        Club c = cService.getClubById(id);
        return ResponseEntity.ok(c);
    }

    @PostMapping("/register")
    public ResponseEntity<Registration> register(@Valid @RequestBody Registration reg) {
        Registration newReg = rService.createRegistration(reg);
        return ResponseEntity.status(201).body(newReg);
    }
}