package com.iona.laboraAI.system.common.domain;

import java.time.LocalDateTime;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Generic Aggregate Root representing shared traits across all scientific fields.
 * This serves as a standardized data structure for reporting and tracking.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Experiment {
    private String experimentId;
    private LocalDateTime timestamp;
    private String studentId;
    
    /**
     * The raw data captured during the experiment (e.g., sensor readings, observations).
     */
    private Object rawDataStream;

    /**
     * Flexible metadata/payload that domain-specific services know how to interpret.
     */
    private Map<String, Object> payload;
    
    private String domain; // e.g., "CHEMISTRY", "PHYSICS"
    private String type;   // e.g., "TITRATION", "KINEMATICS"
}