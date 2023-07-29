package com.exam.examserver.entities.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "category")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString

public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cId;

    private String title;

    private String description;

    @OneToMany(mappedBy =  "category",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Quiz> quizzes = new LinkedHashSet<>();





}
