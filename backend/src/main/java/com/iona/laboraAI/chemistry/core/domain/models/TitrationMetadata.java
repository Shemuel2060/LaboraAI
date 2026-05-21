package com.iona.laboraAI.chemistry.core.domain.models;

import lombok.Value;

/**
 * Titration-specific metadata and calculations.
 */
@Value
public class TitrationMetadata {
	private Double burretteVolume; // Initial burette volume
	private Double startReading; // Initial burette reading
	private Double endReading; // Final burette reading
	private Double concentrationTitrant; // Concentration of the titrant
	private String titrantName; // Name of the titrant
	private String analyteName; // Name of the analyte
	private String molarRatio; // Molar ratio (e.g., "1:1")
	private Double volumeAnalyte; // Volume of analyte used
}
