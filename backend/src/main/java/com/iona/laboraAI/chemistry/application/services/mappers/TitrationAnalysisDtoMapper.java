package com.iona.laboraAI.chemistry.application.services.mappers;

import com.iona.laboraAI.chemistry.core.domain.TitrationAnalysis;
import com.iona.laboraAI.chemistry.core.dtos.response.TitrationAnalysisResponse;
import com.iona.laboraAI.system.utils.Status;

/**
 * Mapper utility to convert between core domain models and response DTOs.
 */
public class TitrationAnalysisDtoMapper {

    /**
     * Maps a TitrationAnalysis domain entity to a TitrationAnalysisResponse DTO.
     *
     * @param domain The domain titration analysis.
     * @return The response DTO.
     */
    public static TitrationAnalysisResponse toResponse(TitrationAnalysis domain) {
        if (domain == null) {
            return null;
        }

        var result = domain.getTitrationResult();

        return TitrationAnalysisResponse.builder()
                .experimentId(domain.getAnalysisId())
                .calculatedConcentration(result != null ? result.getConcentration() : null)
                .concentrationUnit(result != null ? result.getUnit() : "M")
                .averageTitre(result != null ? result.getAverageTitre() : null)
                .standardDeviation(result != null ? result.getStandardDeviation() : 0.0)
                .phDataAvailable(result != null ? result.getPhAvailable() : false)
                .equivalencePointInsight(result != null ? result.getEquivalencePointInsight() : "")
                .expInsight("Titration calculations verified. AI chemical analysis attached.")
                .modelUsed("gemini-1.5-flash")
                .status(Status.SUCCESS)
                .build();
    }
}
