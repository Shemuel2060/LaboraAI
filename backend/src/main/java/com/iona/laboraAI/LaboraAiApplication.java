package com.iona.laboraAI;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.ai.chat.client.ChatClient;

@SpringBootApplication
public class LaboraAiApplication {

	public static void main(String[] args) {
		SpringApplication.run(LaboraAiApplication.class, args);
	}

	// @Bean
	// public CommandLineRunner runner(ChatClient.Builder builder) {
	// return args -> {
	// try {
	// ChatClient chatClient = builder.build();
	// String response = chatClient.prompt("Tell me a joke").call().content();
	// System.out.println(response);
	// } catch (Exception e) {
	// System.out.println("\n");
	// System.err.println("Error: " + e.getMessage());
	// }
	// };
	// }

}
