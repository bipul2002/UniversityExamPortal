package com.exam.examserver.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@ToString
@Entity
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  long userRoleId;


    //user
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnore
    private User user;


    @ManyToOne
    @JsonIgnore
    private  Role role;


}
