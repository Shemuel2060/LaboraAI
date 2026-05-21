package com.iona.laboraAI.system.common.dtos.response;

import java.util.List;
import java.util.Map;

import com.iona.laboraAI.system.common.valueobjects.DataPoint;
import com.iona.laboraAI.system.utils.Status;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ExperimentResponse {
	
	private String experimentId;

    private String expInsight; // later AI-generated

    private String modelUsed; // "manual", "AI-v1"
    private Status status;

}
