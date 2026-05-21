package com.iona.laboraAI.system.common.dtos.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExperimentRequest {

	private String experimentName;
	private String description;
	private String hypothesis;
	private String domain; // CHEMISTRY, PHYSICS, BIOLOGY, ECONOMICS
	private String variableType; // INDEPENDENT, DEPENDENT, CONTROL
	private String status; // SUCCESS, FAILED, PARTIAL

}
// JAVA_HOME='c:/Program Files/Java/jdk-25.0.3' mvn spring-boot:run
// -Dspring-boot.run.arguments="--SPRING_AI_GOOGLE_GENAI_API_KEY=AIzaSyB0SNs7-XTl_EWM2mkenEL1zGeOnxH3OE0"