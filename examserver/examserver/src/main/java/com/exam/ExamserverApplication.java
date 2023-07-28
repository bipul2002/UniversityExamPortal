package com.exam;

import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamserverApplication  implements CommandLineRunner {

	@Autowired
	private UserService userService;

	public static void main(String[] args) {

		SpringApplication.run(ExamserverApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {

		System.out.println("code start");

//		User user = new User();
//
//		user.setName("Snnehasis");
//		user.setEmail("sdebyans@argusoft.com");
//		user.setUsername("debyans");
//		user.setPassword("234");
//
//
//		Role role1 = new Role();
//		role1.setRoleId((23L));
//		role1.setRoleName("Admin");
//
//		Set<UserRole> userRoleSet= new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//
//		userRoleSet.add( userRole);
//
//		User user1 = this.userService.createUser(user,userRoleSet);
//		System.out.println(user1.getUsername());
	}
}
