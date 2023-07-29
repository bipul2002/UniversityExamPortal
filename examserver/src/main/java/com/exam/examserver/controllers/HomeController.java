package com.exam.examserver.controllers;

//import com.exam.examserver.entities.Role;
import com.exam.examserver.entities.User;
//import com.exam.examserver.entities.UserRole;
import com.exam.examserver.services.UserService;
import com.exam.examserver.services.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/home")
@CrossOrigin("*")
public class HomeController {


    //private UserServiceImpl userService;


    @Autowired
    private UserService userService;

    @Autowired
    private UserDetailsService userDetailsService;


    @GetMapping("/users")
    public List<User>getUser(){
        System.out.println("getting users");
        return this.userService.getUser();
    }

    //Api to return  the details of the current user

    @GetMapping("/current-user")
    public  User getLoggedInUser(Principal principal){
        return ((User)this.userDetailsService.loadUserByUsername(principal.getName()));

    }

    //Create User APi

//    @PostMapping("/create-user")
//    public User createUser(@RequestBody User user) throws Exception {
//
//
//        Set<UserRole> roles = new HashSet<>();
//
//        Role role = new Role();
//        role.setRoleId(23L);
//        role.setRoleName("Normal");
//
//        UserRole userRole = new UserRole();
//        userRole.setUser(user);
//        userRole.setRole(role);
//
//        roles.add(userRole);
//
//        return this.userService.createUser(user,roles);
//    }


    //Api for getting the username
    @GetMapping("/{username}")
    public User getUsername(@PathVariable("username") String username)
    {
        return  this.userService.getUsername(username);
    }

    //API to delete User

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") String userId) {
        this.userService.deleteUser(userId);
    }

}
