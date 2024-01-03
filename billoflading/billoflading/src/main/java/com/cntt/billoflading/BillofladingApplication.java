package com.cntt.billoflading;

import com.cntt.billoflading.config.AppProperties;
import com.cntt.billoflading.config.FileStorageProperties;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({ FileStorageProperties.class, AppProperties.class})
@OpenAPIDefinition(
		info =@Info(
				title = "User API",
				version = "version 1.1.0",
				contact = @Contact(
						name = "Baeldung", email = "user-apis@baeldung.com", url = "https://www.baeldung.com"
				),
				license = @License(
						name = "Apache 2.0", url = "https://www.apache.org/licenses/LICENSE-2.0"
				)
		)
)

public class BillofladingApplication {

	public static void main(String[] args) {
		SpringApplication.run(BillofladingApplication.class, args);
	}

}
