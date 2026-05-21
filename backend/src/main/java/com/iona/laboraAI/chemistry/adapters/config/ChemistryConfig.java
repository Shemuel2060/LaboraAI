package com.iona.laboraAI.chemistry.adapters.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.iona.laboraAI.chemistry.application.services.AnalyzeTitrationDataImpl;
import com.iona.laboraAI.chemistry.application.services.GetTitrationAnalysisImpl;
import com.iona.laboraAI.chemistry.core.ports.api.AnalyzeTitrationDataUseCase;
import com.iona.laboraAI.chemistry.core.ports.api.GetTitrationAnalysisUseCase;
import com.iona.laboraAI.chemistry.core.ports.spi.AITitrationAnalysisSpi;
import com.iona.laboraAI.chemistry.core.ports.spi.TitrationAnalysisSpi;

@Configuration
public class ChemistryConfig {

	@Bean
	AnalyzeTitrationDataUseCase analyzeTitrationDataUseCase(
			TitrationAnalysisSpi persistenceSpi,
			AITitrationAnalysisSpi aiSpi) {
		return new AnalyzeTitrationDataImpl(persistenceSpi, aiSpi);
	}

	@Bean
	GetTitrationAnalysisUseCase getTitrationAnalysisUseCase(TitrationAnalysisSpi persistenceSpi) {
		return new GetTitrationAnalysisImpl(persistenceSpi);
	}

}
