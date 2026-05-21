package com.iona.laboraAI.chemistry.core.domain.models;

import lombok.Value;

/**
 * Result of a titration analysis.
 */
@Value
public class TitrationResult {
	private Double concentration; // Calculated concentration
	private String unit; // e.g., "M"
	private Double averageTitre; // Average burette reading
	private Double standardDeviation; // Standard deviation
	private Boolean phAvailable; // Whether pH data was available
	private String equivalencePointInsight; // Insight about equivalence point
}
