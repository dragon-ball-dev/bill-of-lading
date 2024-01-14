package com.cntt.billoflading.domain.enums;

public enum WeightUnit {
    GRAM(0),
    KILOGRAM(1),
    TON(2);


    private int value;

    WeightUnit(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
    }
}
