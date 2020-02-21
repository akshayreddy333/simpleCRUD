package com.akshay.simplecrud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.akshay.simplecrud.entities.User;
import com.akshay.simplecrud.repositories.UserRepo;

@SpringBootApplication
public class SimpleCrudApplication implements CommandLineRunner {
	// CommandLineRunner helps us run the code in run method when application is started
	
	@Autowired
	private UserRepo userRepo;

	public static void main(String[] args) {
		SpringApplication.run(SimpleCrudApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		userRepo.save(new User("one","one"));
		userRepo.save(new User("two","two"));
		userRepo.save(new User("three","three"));
		userRepo.save(new User("four","four"));		
		
	}

}
