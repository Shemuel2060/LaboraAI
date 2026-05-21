package com.iona.laboraAI.system.common.dtos.response;

import lombok.Value;

/**
 * Represents a calculated analysis response.
 */
@Value
public class AnalysisResponse {
	private String resultId;
	private String experimentId;
	private String analysisType;
	private Object result; // Generic result object
	private String insight;
	private String timestamp;
}
