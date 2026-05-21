package com.iona.laboraAI.chemistry.core.ports.api;

import com.iona.laboraAI.chemistry.core.dtos.response.TitrationAnalysisResponse;

/**
 * Usecase for retrieving saved titration analysis results.
 */
public interface GetTitrationAnalysisUseCase {
    /**
     * Retrieves titration analysis by its ID.
     *
     * @param analysisId The ID of the analysis to retrieve.
     * @return The analysis response containing calculations and AI insights.
     */
    TitrationAnalysisResponse getAnalysis(String analysisId);
}
