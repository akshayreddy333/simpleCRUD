package com.akshay.simplecrud.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akshay.simplecrud.entities.User;

public interface UserRepo extends JpaRepository<User, Long>{

}
