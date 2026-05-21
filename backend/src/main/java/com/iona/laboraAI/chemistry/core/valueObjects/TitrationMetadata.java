package com.iona.laboraAI.chemistry.core.valueObjects;

import lombok.Value;

@Value
public class TitrationMetadata {
    Double burretteVolume;       // Max burette capacity (e.g., 50.0 mL)
    Double startReading;         // Initial volume (e.g., 0.0 mL)
    Double endReading;           // Final volume at endpoint (e.g., 24.5 mL)
    Double concentrationTitrant; // Molarity of known solution (e.g., 0.1 M)
    String titrantName;          // e.g., "HCl"
    String analyteName;          // e.g., "NaOH"
    String molarRatio;           // e.g., "1:1"
    Double volumeAnalyte;        // Volume of unknown solution pipetted (e.g., 25.0 mL)
}