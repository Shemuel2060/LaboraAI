package com.iona.laboraAI.chemistry.core.ports.spi;

import java.util.Optional;
import com.iona.laboraAI.chemistry.core.domain.TitrationAnalysis;

/**
 * SPI for Titration analysis persistence and core operations.
 */
public interface TitrationAnalysisSpi {
    /**
     * Saves a titration analysis.
     */
    TitrationAnalysis save(TitrationAnalysis titrationAnalysis);

    /**
     * Retrieves a titration analysis by ID.
     */
    Optional<TitrationAnalysis> findById(String analysisId);
}
