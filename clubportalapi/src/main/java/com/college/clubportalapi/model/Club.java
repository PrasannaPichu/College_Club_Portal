package com.college.clubportalapi.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
import java.util.List;

@Data
@Document(collection = "clubs")
public class Club {
    @Id
    private String id;
    private String name;
    private String tagline;
    private String detailedDescription;
    private LocalDate originDate;
    private List<Event> events;
    private String imageUrl;
}

@Data
class Event {
    private String title;
    private String description;
    private String imageUrl;
}