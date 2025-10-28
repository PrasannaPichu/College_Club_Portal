package com.college.clubportalapi.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.*;

@Data
@Document(collection = "registrations")
public class Registration {
    @Id
    private String id;
    
    @NotBlank
    private String clubId;
    
    @NotBlank
    @Size(min = 3, message = "Name must be at least 3 characters")
    private String name;
    
    @NotBlank(message = "Register number is required")
    private String regNo;
    
    @NotBlank
    private String dept;
    
    @Min(value = 1, message = "Year must be at least 1")
    @Max(value = 4, message = "Year must be no more than 4")
    private int year;
    
    @NotBlank
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone must be 10 digits")
    private String phone;
    
    @NotBlank(message = "Reason is required")
    private String reason;
}