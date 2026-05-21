package com.iona.laboraAI.chemistry.core.domain.valueobjects;

import lombok.Value;


/**
 * Represents a calculated chemical property.
 */
@Value
public class Concentration {
    Double molarity;
    String unit; // e.g., "M"
    
    public static Concentration of(Double value) {
        return new Concentration(value, "M");
    }
}
