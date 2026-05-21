package com.iona.laboraAI.chemistry.adapters.externalAI;

import com.iona.laboraAI.chemistry.core.domain.models.TitrationMetadata;
import com.iona.laboraAI.chemistry.core.ports.spi.AITitrationAnalysisSpi;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Component;

@Component
public class AITitrationAnalysisAdapter implements AITitrationAnalysisSpi {

	private final ChatClient chatClient;

	public AITitrationAnalysisAdapter(ChatClient.Builder chatClientBuilder) {
		this.chatClient = chatClientBuilder.build();
	}

	@Override
	public String generateInsight(TitrationMetadata metadata, Double averageTitre, Double calculatedConcentration) {
		String systemPrompt = """
				You are a Chemistry Lab AI assistant. You analyze acid-base titration experiments.
				Provide details in Markdown format including:
				1. A brief summary of the reaction mechanism and balanced chemical equation.
				2. Analysis of the calculations (Titre: {averageTitre} mL, Analyte Molarity: {calculatedConcentration} M).
				3. Expected pH curve characteristics and indicator suitability (e.g. Phenolphthalein vs Methyl Orange).
				4. Possible sources of experimental error.
				""";

		String userPrompt = String.format("""
				Titration details:
				- Titrant Name: %s
				- Titrant Concentration: %.4f M
				- Analyte Name: %s
				- Analyte Volume: %.2f mL
				- Stoichiometric Molar Ratio: %s
				- Average Titre Volume: %.2f mL
				- Calculated Concentration: %.4f M
				""",
				metadata.getTitrantName(),
				metadata.getConcentrationTitrant(),
				metadata.getAnalyteName(),
				metadata.getVolumeAnalyte(),
				metadata.getMolarRatio(),
				averageTitre,
				calculatedConcentration
		);

		try {
			return this.chatClient.prompt()
					.system(systemPrompt)
					.user(userPrompt)
					.call()
					.content();
		} catch (Exception e) {
			return "Fallback analysis: The titration of " + metadata.getAnalyteName() + " with " + metadata.getTitrantName() +
					" yielded an average titre of " + averageTitre + " mL, giving a calculated analyte concentration of " +
					String.format("%.4f", calculatedConcentration) + " M. (AI service error: " + e.getMessage() + ")";
		}
	}
}
