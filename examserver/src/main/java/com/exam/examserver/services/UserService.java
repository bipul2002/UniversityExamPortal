package com.exam.examserver.services;

import com.exam.examserver.entities.User;
import com.exam.examserver.entities.UserRole;
//import com.exam.examserver.entities.UserRole;

import java.util.List;
import java.util.Set;

public interface UserService {

    public User createUser(User user, Set<UserRole> userRoles) throws Exception;

    public List<User> getUser();

    //get user by username

   public User getUsername(String username);
//
//    // delete user through username
//
    public void deleteUser(String userId);




}
