package com.iona.laboraAI.chemistry.core.ports.api;

import com.iona.laboraAI.chemistry.core.dtos.requests.TitrationAnalysisRequest;
import com.iona.laboraAI.chemistry.core.dtos.response.TitrationAnalysisResponse;

/**
 * Usecase for analyzing titration data specifically in the chemistry context.
 */
public interface AnalyzeTitrationDataUseCase {
    /**
     * Specialized titration analysis.
     */
    TitrationAnalysisResponse analyze(TitrationAnalysisRequest request);
}
