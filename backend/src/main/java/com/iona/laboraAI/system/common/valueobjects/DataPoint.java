package com.iona.laboraAI.system.common.valueobjects;

import java.util.Map;

import lombok.Value;

@Value
public class DataPoint {
	
	private Map<String, Double> values;

}
