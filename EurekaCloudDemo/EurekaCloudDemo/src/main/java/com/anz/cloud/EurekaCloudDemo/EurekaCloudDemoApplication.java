package com.anz.cloud.EurekaCloudDemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaCloudDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaCloudDemoApplication.class, args);
	}
}
