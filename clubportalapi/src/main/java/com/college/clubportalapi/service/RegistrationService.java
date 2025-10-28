package com.college.clubportalapi.service;

import com.college.clubportalapi.model.Registration;
import com.college.clubportalapi.repo.RegRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {
    @Autowired
    private RegRepo rRepo;

    public Registration createRegistration(Registration reg) {
        return rRepo.save(reg);
    }
}