package com.exam.examserver.services.impl;

import com.exam.examserver.entities.User;
import com.exam.examserver.entities.UserRole;
import com.exam.examserver.repo.RoleRepository;
import com.exam.examserver.repo.RoleRepository;

import com.exam.examserver.repo.UserRepository;
import com.exam.examserver.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private PasswordEncoder passwordEncoder;


    @Autowired
   private RoleRepository roleRepository;


    //Returning the list of user
    public List<User> getUser(){

        return userRepository.findAll();
    }

    //find user by username
    @Override
    public User getUsername(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(String userId) {

        this.userRepository.deleteById(userId);

    }



    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {




       User local =  this.userRepository.findByUsername(user.getUsername());

        if(local!=null){

            System.out.println("User already Exsist");
            throw new Exception(("User already present!!"));
        }else {
            //user create
            //Saving all the role in the database first
            for(UserRole ur:userRoles){
                roleRepository.save(ur.getRole());
            }
            user.getUserRoles().addAll(userRoles);

            user.setUserId(UUID.randomUUID().toString());
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            local = this.userRepository.save(user);

        }
        return local;
    }


//    public User createUser(User user){
//        user.setUserId(UUID.randomUUID().toString());
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        return userRepository.save(user);
//    }



}
