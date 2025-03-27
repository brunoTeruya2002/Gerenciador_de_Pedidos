package com.example.projeto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class ProjetoApplication {

	public static void main(String[] args) {

		Date date = new Date();
		System.out.println(date.getClass());


		SpringApplication.run(ProjetoApplication.class, args);
	}

}
