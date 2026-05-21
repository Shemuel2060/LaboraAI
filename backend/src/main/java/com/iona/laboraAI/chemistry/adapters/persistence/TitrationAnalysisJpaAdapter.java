package com.iona.laboraAI.chemistry.adapters.persistence;

import java.util.Optional;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import com.iona.laboraAI.chemistry.adapters.persistence.mappers.TitrationAnalysisPersistenceMapper;
import com.iona.laboraAI.chemistry.adapters.persistence.models.TitrationAnalysisEntity;
import com.iona.laboraAI.chemistry.core.domain.TitrationAnalysis;
import com.iona.laboraAI.chemistry.core.ports.spi.TitrationAnalysisSpi;
import org.springframework.stereotype.Component;

@Component
public class TitrationAnalysisJpaAdapter implements TitrationAnalysisSpi {

	private final Map<String, TitrationAnalysisEntity> inMemoryDb = new ConcurrentHashMap<>();

	@Override
	public TitrationAnalysis save(TitrationAnalysis titrationAnalysis) {
		if (titrationAnalysis == null || titrationAnalysis.getAnalysisId() == null) {
			throw new IllegalArgumentException("Titration analysis and its ID must not be null");
		}
		TitrationAnalysisEntity entity = TitrationAnalysisPersistenceMapper.toEntity(titrationAnalysis);
		inMemoryDb.put(entity.getAnalysisId(), entity);
		return titrationAnalysis;
	}

	@Override
	public Optional<TitrationAnalysis> findById(String analysisId) {
		if (analysisId == null) {
			return Optional.empty();
		}
		return Optional.ofNullable(inMemoryDb.get(analysisId))
				.map(TitrationAnalysisPersistenceMapper::toDomain);
	}
}
