package com.iona.laboraAI.chemistry.application.services;

import com.iona.laboraAI.chemistry.core.domain.TitrationAnalysis;
import com.iona.laboraAI.chemistry.core.domain.models.TitrationMetadata;
import com.iona.laboraAI.chemistry.core.domain.models.TitrationResult;
import com.iona.laboraAI.chemistry.core.dtos.requests.TitrationAnalysisRequest;
import com.iona.laboraAI.chemistry.core.dtos.response.TitrationAnalysisResponse;
import com.iona.laboraAI.chemistry.core.ports.api.AnalyzeTitrationDataUseCase;
import com.iona.laboraAI.chemistry.core.ports.spi.AITitrationAnalysisSpi;
import com.iona.laboraAI.chemistry.core.ports.spi.TitrationAnalysisSpi;
import com.iona.laboraAI.system.common.domain.Experiment;
import com.iona.laboraAI.system.utils.Status;

import java.time.LocalDateTime;

public class AnalyzeTitrationDataImpl implements AnalyzeTitrationDataUseCase {

    private final TitrationAnalysisSpi persistenceSpi;
    private final AITitrationAnalysisSpi aiSpi;

    public AnalyzeTitrationDataImpl(TitrationAnalysisSpi persistenceSpi, AITitrationAnalysisSpi aiSpi) {
        this.persistenceSpi = persistenceSpi;
        this.aiSpi = aiSpi;
    }

    @Override
    public TitrationAnalysisResponse analyze(TitrationAnalysisRequest request) {
        // 1. Calculate average titre
        double averageTitre = calculateAverageTitre(request);

        // 2. Parse molar ratio (e.g. "1:1" -> Analyte:Titrant is 1:1)
        double analyteRatio = 1.0;
        double titrantRatio = 1.0;
        if (request.getMolarRatio() != null && request.getMolarRatio().contains(":")) {
            try {
                String[] parts = request.getMolarRatio().split(":");
                analyteRatio = Double.parseDouble(parts[0]);
                titrantRatio = Double.parseDouble(parts[1]);
            } catch (Exception e) {
                // Keep 1.0
            }
        }

        // 3. Calculate concentration: C_analyte = (C_titrant * V_titrant *
        // Ratio_analyte) / (V_analyte * Ratio_titrant)
        double titrantConc = request.getConcentrationTitrant() != null ? request.getConcentrationTitrant() : 0.1;
        double analyteVol = request.getVolumeAnalyte() != null ? request.getVolumeAnalyte() : 25.0;
        double calculatedConcentration = (titrantConc * averageTitre * analyteRatio) / (analyteVol * titrantRatio);

        // 4. Calculate standard deviation of readings if multiple trials exist
        double standardDeviation = calculateStandardDeviation(request, averageTitre);

        // 5. Construct domain metadata object
        TitrationMetadata metadata = new TitrationMetadata(
                request.getBurretteVolume() != null ? request.getBurretteVolume() : 50.0,
                0.0, // assumption that burette starting reading at 0.0
                averageTitre,
                titrantConc,
                request.getTitrantName() != null ? request.getTitrantName() : "HCl",
                request.getAnalyteName() != null ? request.getAnalyteName() : "NaOH",
                request.getMolarRatio() != null ? request.getMolarRatio() : "1:1",
                analyteVol);

        // 6. Invoke AI SPI to generate qualitative chemistry insights
        String insight = aiSpi.generateInsight(metadata, averageTitre, calculatedConcentration);

        // 7. Instantiate TitrationResult
        boolean phAvailable = request.getReadings() != null
                && request.getReadings().stream().anyMatch(r -> r.getPH() != null);
        TitrationResult result = new TitrationResult(
                calculatedConcentration,
                "M",
                averageTitre,
                standardDeviation,
                phAvailable,
                insight);

        // 8. Build experiment and titration analysis aggregate
        String analysisId = "EXP_" + System.currentTimeMillis();
        Experiment experiment = Experiment.builder()
                .experimentId(analysisId)
                .timestamp(LocalDateTime.now())
                .domain("CHEMISTRY")
                .type("TITRATION")
                .build();

        TitrationAnalysis analysis = TitrationAnalysis.builder()
                .analysisId(analysisId)
                .experiment(experiment)
                .titrationMetadata(metadata)
                .titrationResult(result)
                .build();

        // 9. Save via SPI persistence
        persistenceSpi.save(analysis);

        // 10. Map and return response DTO using DTO mapper
        return com.iona.laboraAI.chemistry.application.services.mappers.TitrationAnalysisDtoMapper.toResponse(analysis);
    }

    private double calculateAverageTitre(TitrationAnalysisRequest request) {
        if (request.getReadings() == null || request.getReadings().isEmpty()) {
            return 25.0; // fallback default
        }
        return request.getReadings().stream()
                .mapToDouble(r -> r.getVolume() != null ? r.getVolume() : 0.0)
                .average()
                .orElse(25.0);
    }

    private double calculateStandardDeviation(TitrationAnalysisRequest request, double average) {
        if (request.getReadings() == null || request.getReadings().size() <= 1) {
            return 0.0;
        }
        double sumSqDiff = request.getReadings().stream()
                .mapToDouble(r -> r.getVolume() != null ? r.getVolume() : 0.0)
                .map(v -> Math.pow(v - average, 2))
                .sum();
        return Math.sqrt(sumSqDiff / (request.getReadings().size() - 1));
    }
}
