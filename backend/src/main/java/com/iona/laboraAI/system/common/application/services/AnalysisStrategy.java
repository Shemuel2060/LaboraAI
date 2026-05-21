package com.iona.laboraAI.system.common.application.services;

import com.iona.laboraAI.system.common.domain.Experiment;
import com.iona.laboraAI.system.common.dtos.response.AnalysisResponse;

/**
 * Strategy interface for analyzing experiments.
 * Each domain (chemistry, physics, biology) implements this interface
 * with their specific analysis logic.
 */
public interface AnalysisStrategy {
	
	/**
	 * Analyze an experiment and produce results.
	 * 
	 * @param experiment The experiment to analyze
	 * @return The analysis response
	 */
	AnalysisResponse analyze(Experiment experiment);
	
	/**
	 * Get the supported domain type for this strategy.
	 * 
	 * @return The domain type
	 */
	String getSupportedDomain();
}
