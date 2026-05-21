package com.iona.laboraAI.chemistry.adapters.config;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ChatClientConfig {

    @Bean
    ChatClient chatClient(ChatClient.Builder chatClientBuilder) {
        return chatClientBuilder.build();
    }

    // JAVA_HOME='c:/Program Files/Java/jdk-25.0.3' mvn spring-boot:run

}