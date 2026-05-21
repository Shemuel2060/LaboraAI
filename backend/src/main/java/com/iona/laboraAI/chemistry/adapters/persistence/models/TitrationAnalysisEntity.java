package com.iona.laboraAI.chemistry.adapters.persistence.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "titrating_analysis")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TitrationAnalysisEntity {

    @Id
    private String analysisId;

    private LocalDateTime timestamp;
    private String studentId;

    // Metadata
    private Double burretteVolume;
    private Double startReading;
    private Double endReading;
    private Double concentrationTitrant;
    private String titrantName;
    private String analyteName;
    private String molarRatio;
    private Double volumeAnalyte;

    // Results
    private Double calculatedConcentration;
    private String concentrationUnit;
    private Double averageTitre;
    private Double standardDeviation;
    private Boolean phDataAvailable;

    @Column(columnDefinition = "TEXT")
    private String equivalencePointInsight;
}
