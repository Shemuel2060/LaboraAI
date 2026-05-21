package com.iona.laboraAI.system.common.valueobjects;

import com.iona.laboraAI.system.utils.VariableType;

import lombok.Value;

@Value
public class Variable {
	
	private String name;       // "pH", "time", "temperature"
    private String unit;       // "s", "mol/L", "°C"
    private VariableType type; // INDEPENDENT / DEPENDENT / CONTROL

}
