package com.exam.controller;

import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    //Creating user

    @Autowired
    private UserService userService;
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {


        Set<UserRole> roles = new HashSet<>();

        Role role = new Role();
        role.setRoleId(23L);
        role.setRoleName("Normal");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);

        roles.add(userRole);

       return this.userService.createUser(user,roles);
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username) {
        return this.userService.getUser(username);
    }


    //delete the user by id

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId){

        this.userService.deleteUser(userId);
    }

    //update the user
//    @RequestMapping(value="/users/{id}", method = RequestMethod.PUT)
//    public void getUser(@PathVariable String id, @RequestBody User user) {
//
//       return this.userService.updateUser(id, user);
//
//    }

//update employee rest API
//     PutMapping("/{username}")
//     public ResponseEntity<User> updateUser(@PathVariable String username, @RequestBody User user){
//        User user1 = this.userService.getUser(username);
//
//        user1.setUsername(user.getUsername());
//        user1.setPassword(user.getPassword());
//        user1.setEmail(user.getEmail());
//        user1.setName(user.getName());
//
//        User updateUser =
//
//     }
    



}
