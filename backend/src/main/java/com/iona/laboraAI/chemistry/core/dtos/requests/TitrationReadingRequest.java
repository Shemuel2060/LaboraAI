package com.iona.laboraAI.chemistry.core.dtos.requests;

import com.fasterxml.jackson.annotation.JsonCreator;

import lombok.Getter;

@Getter
public class TitrationReadingRequest {

	private Double volume;
	private Double pH;
	
	@JsonCreator
	public TitrationReadingRequest(Double volume, Double pH) {
		this.volume = volume;
		this.pH = pH;
	}
	
	@JsonCreator
	public TitrationReadingRequest fromVolume(Double volume) {
		return new TitrationReadingRequest(volume, null);
	}
}
