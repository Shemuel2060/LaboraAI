package com.iona.laboraAI.chemistry.application.services;

import com.iona.laboraAI.chemistry.application.services.mappers.TitrationAnalysisDtoMapper;
import com.iona.laboraAI.chemistry.core.dtos.response.TitrationAnalysisResponse;
import com.iona.laboraAI.chemistry.core.ports.api.GetTitrationAnalysisUseCase;
import com.iona.laboraAI.chemistry.core.ports.spi.TitrationAnalysisSpi;

/**
 * Service implementation for retrieving saved titration analysis results.
 */
public class GetTitrationAnalysisImpl implements GetTitrationAnalysisUseCase {

    private final TitrationAnalysisSpi persistenceSpi;

    public GetTitrationAnalysisImpl(TitrationAnalysisSpi persistenceSpi) {
        this.persistenceSpi = persistenceSpi;
    }

    @Override
    public TitrationAnalysisResponse getAnalysis(String analysisId) {
        return persistenceSpi.findById(analysisId)
                .map(TitrationAnalysisDtoMapper::toResponse)
                .orElseThrow(() -> new IllegalArgumentException("Titration analysis not found for ID: " + analysisId));
    }
}
