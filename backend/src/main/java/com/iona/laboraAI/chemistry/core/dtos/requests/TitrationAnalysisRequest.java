package com.iona.laboraAI.chemistry.core.dtos.requests;

import java.util.List;

import com.iona.laboraAI.system.common.dtos.requests.ExperimentRequest;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

/**
 * Specialized request for Titration analysis, extending the generic
 * ExperimentRequest.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class TitrationAnalysisRequest extends ExperimentRequest {
    private Double burretteVolume;
    private List<TitrationReadingRequest> readings;
    private Double concentrationTitrant;
    private String titrantName;
    private String analyteName;
    private String molarRatio;
    private Double volumeAnalyte;
}
