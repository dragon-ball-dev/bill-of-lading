package com.cntt.billoflading.domain.enums;

public enum WeightUnit {
    GRAM("GRAM"),
    KILOGRAM("KILOGRAM"),
    TON("TON"),;


    private String value;

    WeightUnit(String value){
        this.value = value;
    }

    public String getValue(){
        return this.value;
    }
}
