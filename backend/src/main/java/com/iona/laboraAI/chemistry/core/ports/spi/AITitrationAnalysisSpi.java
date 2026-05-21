package com.iona.laboraAI.chemistry.core.ports.spi;

import com.iona.laboraAI.chemistry.core.domain.models.TitrationMetadata;

/**
 * SPI (Service Provider Interface) for AI-driven titration analysis.
 * This port is implemented by adapters that connect to external AI services.
 */
public interface AITitrationAnalysisSpi {
    /**
     * Generates qualitative titration analysis insights using AI.
     */
    String generateInsight(TitrationMetadata metadata, Double averageTitre, Double calculatedConcentration);
}
