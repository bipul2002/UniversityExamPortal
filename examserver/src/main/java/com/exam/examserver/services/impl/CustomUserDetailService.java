package com.exam.examserver.services.impl;

import com.exam.examserver.entities.User;
import com.exam.examserver.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //load user from username

//        User user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("User not found"));
//
//        return user;


        User user= this.userRepository.findByUsername(username);

        if(user==null)
        {
            System.out.println("User not found");
            throw  new UsernameNotFoundException("No user found with this username");
        }
        return user;


    }
}
