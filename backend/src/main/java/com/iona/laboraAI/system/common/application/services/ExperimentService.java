package com.iona.laboraAI.system.common.application.services;

import com.iona.laboraAI.system.common.domain.Experiment;
import com.iona.laboraAI.system.common.dtos.response.AnalysisResponse;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.HashMap;

/**
 * Main application service for experiment analysis.
 * Orchestrates analysis requests across different domains by delegating
 * to the appropriate domain-specific strategy.
 */
@Service
public class ExperimentService {
	
	private final Map<String, AnalysisStrategy> strategies;
	
	public ExperimentService() {
		this.strategies = new HashMap<>();
	}
	
	/**
	 * Register an analysis strategy for a domain.
	 * 
	 * @param domain The domain name (CHEMISTRY, PHYSICS, BIOLOGY, etc.)
	 * @param strategy The analysis strategy implementation
	 */
	public void registerStrategy(String domain, AnalysisStrategy strategy) {
		strategies.put(domain.toUpperCase(), strategy);
	}
	
	/**
	 * Analyze an experiment using the appropriate domain strategy.
	 * 
	 * @param experiment The experiment to analyze
	 * @return The analysis result
	 * @throws IllegalArgumentException if no strategy is registered for the domain
	 */
	public AnalysisResponse analyzeExperiment(Experiment experiment) {
		String domain = experiment.getDomain();
		AnalysisStrategy strategy = strategies.get(domain != null ? domain.toUpperCase() : null);
		
		if (strategy == null) {
			throw new IllegalArgumentException("No analysis strategy found for domain: " + domain);
		}
		
		return strategy.analyze(experiment);
	}
	
	/**
	 * Get all registered strategies.
	 * 
	 * @return Map of domain names to strategies
	 */
	public Map<String, AnalysisStrategy> getStrategies() {
		return new HashMap<>(strategies);
	}
}
