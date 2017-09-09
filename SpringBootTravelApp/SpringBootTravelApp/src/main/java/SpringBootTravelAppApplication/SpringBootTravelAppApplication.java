package SpringBootTravelAppApplication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableAutoConfiguration
@EnableMongoRepositories(basePackages = {"com.anz.*"})
@ComponentScan(basePackages = {"com.anz.*"})
@EntityScan(basePackages = "com.anz.*")
public class SpringBootTravelAppApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(SpringBootTravelAppApplication.class, args) ;

	}
}

