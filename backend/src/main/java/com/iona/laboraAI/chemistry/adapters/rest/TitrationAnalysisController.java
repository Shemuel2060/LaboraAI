package com.iona.laboraAI.chemistry.adapters.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.iona.laboraAI.chemistry.core.dtos.requests.TitrationAnalysisRequest;
import com.iona.laboraAI.chemistry.core.dtos.response.TitrationAnalysisResponse;
import com.iona.laboraAI.chemistry.core.ports.api.AnalyzeTitrationDataUseCase;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/titration")
public class TitrationAnalysisController {

    private static final Logger logger = LoggerFactory.getLogger(TitrationAnalysisController.class);

    private final AnalyzeTitrationDataUseCase analyzeUsecase;

    private final ChatClient chatClient;

    public TitrationAnalysisController(ChatClient.Builder chatClientBuilder,
            AnalyzeTitrationDataUseCase analyzeUsecase) {

        this.chatClient = chatClientBuilder.build();
        this.analyzeUsecase = analyzeUsecase;
    }

    @GetMapping("/ai")
    public String generation(@RequestParam(value = "prompt") String prompt) {

        logger.info("Received user input: {}", prompt);

        logger.info("API KEY EXISTS: {}",
                System.getenv("SPRING_AI_GOOGLE_GENAI_API_KEY") != null);

        try {

            String response = this.chatClient.prompt()
                    .user(prompt)
                    .call()
                    .content();

            logger.info("AI response received");

            return response;

        } catch (Exception e) {

            logger.error("Failed to generate AI content", e);

            return "System busy or rate limit reached: " + e.getMessage();
        }
    }

    @PostMapping("/test/analyze")
    public ResponseEntity<String> analyze(String json) {
        return ResponseEntity.ok("Testing out connection");
    }

    @PostMapping("/analyze")
    public ResponseEntity<TitrationAnalysisResponse> analyze(@RequestBody TitrationAnalysisRequest request) {
        return ResponseEntity.ok(analyzeUsecase.analyze(request));
    }

}
