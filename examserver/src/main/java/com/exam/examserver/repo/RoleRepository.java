package com.exam.examserver.repo;

import com.exam.examserver.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role,Long> {


}
