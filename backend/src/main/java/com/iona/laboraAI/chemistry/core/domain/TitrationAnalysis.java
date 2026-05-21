package com.iona.laboraAI.chemistry.core.domain;

import com.iona.laboraAI.system.common.domain.Experiment;
import com.iona.laboraAI.chemistry.core.domain.models.TitrationMetadata;
import com.iona.laboraAI.chemistry.core.domain.models.TitrationResult;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Specialized domain model for Titration experiments.
 * It relates to the generic Experiment aggregate and adds chemistry-specific reasoning.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TitrationAnalysis {
    private String analysisId;
    private Experiment experiment;
    private TitrationMetadata titrationMetadata;
    private TitrationResult titrationResult;

    /**
     * Specialized reasoning logic for titration.
     * This follows the "Bridge" strategy where the generic Experiment is interpreted
     * within the specific bounded context of Chemistry.
     */
    public void calculateEquivalencePoint() {
        if (titrationMetadata == null) return;
        
        double titre = titrationMetadata.getEndReading() - titrationMetadata.getStartReading();
        // Placeholder for complex chemical reasoning
        System.out.println("Calculating equivalence point for titre: " + titre);
    }
}
