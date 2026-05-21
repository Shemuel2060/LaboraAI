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
