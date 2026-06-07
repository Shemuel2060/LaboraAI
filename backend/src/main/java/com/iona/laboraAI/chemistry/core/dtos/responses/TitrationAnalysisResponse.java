package com.iona.laboraAI.chemistry.core.dtos.responses;

import com.iona.laboraAI.system.common.dtos.response.ExperimentResponse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

/**
 * Specialized response for Titration analysis, extending the generic
 * ExperimentResponse.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@EqualsAndHashCode(callSuper = true)
public class TitrationAnalysisResponse extends ExperimentResponse {
    private Double calculatedConcentration;
    private String concentrationUnit;
    private Double averageTitre;
    private Double standardDeviation;
    private Boolean phDataAvailable;
    private String equivalencePointInsight;
}
