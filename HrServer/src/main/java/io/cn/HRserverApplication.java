package io.cn;

import io.cn.domain.TimeCard;
import io.cn.repository.TimeCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HRserverApplication implements CommandLineRunner {

	@Autowired
	TimeCardRepository timeCardRepository;

	public static void main(String[] args) {
		SpringApplication.run(HRserverApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		TimeCard timeCard = new TimeCard("Billy@zipcode.com", "8:00am", "10:00pm");
		timeCardRepository.save(timeCard);
		TimeCard timeCard2 = new TimeCard("Bob@zipcode.com", "8:00am", "10:00pm");
		timeCardRepository.save(timeCard2);
	}
}
