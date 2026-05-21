package com.iona.laboraAI.chemistry.adapters.persistence.mappers;

import com.iona.laboraAI.chemistry.adapters.persistence.models.TitrationAnalysisEntity;
import com.iona.laboraAI.chemistry.core.domain.TitrationAnalysis;
import com.iona.laboraAI.chemistry.core.domain.models.TitrationMetadata;
import com.iona.laboraAI.chemistry.core.domain.models.TitrationResult;
import com.iona.laboraAI.system.common.domain.Experiment;

/**
 * Mapper utility to convert between database JPA entities and domain core
 * models.
 */
public class TitrationAnalysisPersistenceMapper {

    public static TitrationAnalysisEntity toEntity(TitrationAnalysis domain) {
        if (domain == null) {
            return null;
        }

        var metadata = domain.getTitrationMetadata();
        var result = domain.getTitrationResult();
        var experiment = domain.getExperiment();

        return TitrationAnalysisEntity.builder()
                .analysisId(domain.getAnalysisId())
                .timestamp(experiment != null ? experiment.getTimestamp() : null)
                .studentId(experiment != null ? experiment.getStudentId() : null)
                .burretteVolume(metadata != null ? metadata.getBurretteVolume() : null)
                .startReading(metadata != null ? metadata.getStartReading() : null)
                .endReading(metadata != null ? metadata.getEndReading() : null)
                .concentrationTitrant(metadata != null ? metadata.getConcentrationTitrant() : null)
                .titrantName(metadata != null ? metadata.getTitrantName() : null)
                .analyteName(metadata != null ? metadata.getAnalyteName() : null)
                .molarRatio(metadata != null ? metadata.getMolarRatio() : null)
                .volumeAnalyte(metadata != null ? metadata.getVolumeAnalyte() : null)
                .calculatedConcentration(result != null ? result.getConcentration() : null)
                .concentrationUnit(result != null ? result.getUnit() : null)
                .averageTitre(result != null ? result.getAverageTitre() : null)
                .standardDeviation(result != null ? result.getStandardDeviation() : null)
                .phDataAvailable(result != null ? result.getPhAvailable() : null)
                .equivalencePointInsight(result != null ? result.getEquivalencePointInsight() : null)
                .build();
    }

    public static TitrationAnalysis toDomain(TitrationAnalysisEntity entity) {
        if (entity == null) {
            return null;
        }

        Experiment experiment = Experiment.builder()
                .experimentId(entity.getAnalysisId())
                .timestamp(entity.getTimestamp())
                .studentId(entity.getStudentId())
                .domain("CHEMISTRY")
                .type("TITRATION")
                .build();

        TitrationMetadata metadata = new TitrationMetadata(
                entity.getBurretteVolume() != null ? entity.getBurretteVolume() : 50.0,
                entity.getStartReading() != null ? entity.getStartReading() : 0.0,
                entity.getEndReading() != null ? entity.getEndReading() : 0.0,
                entity.getConcentrationTitrant() != null ? entity.getConcentrationTitrant() : 0.1,
                entity.getTitrantName() != null ? entity.getTitrantName() : "HCl",
                entity.getAnalyteName() != null ? entity.getAnalyteName() : "NaOH",
                entity.getMolarRatio() != null ? entity.getMolarRatio() : "1:1",
                entity.getVolumeAnalyte() != null ? entity.getVolumeAnalyte() : 25.0);

        TitrationResult result = new TitrationResult(
                entity.getCalculatedConcentration(),
                entity.getConcentrationUnit() != null ? entity.getConcentrationUnit() : "M",
                entity.getAverageTitre(),
                entity.getStandardDeviation() != null ? entity.getStandardDeviation() : 0.0,
                entity.getPhDataAvailable() != null ? entity.getPhDataAvailable() : false,
                entity.getEquivalencePointInsight());

        return TitrationAnalysis.builder()
                .analysisId(entity.getAnalysisId())
                .experiment(experiment)
                .titrationMetadata(metadata)
                .titrationResult(result)
                .build();
    }
}
