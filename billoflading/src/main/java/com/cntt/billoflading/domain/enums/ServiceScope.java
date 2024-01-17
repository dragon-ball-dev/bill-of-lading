package com.cntt.billoflading.domain.enums;

public enum ServiceScope {
    INTERNAL_PROVINCE(0),// noi tinh
    INTERNAL_AREA(1),// Noi mien
    NEAR_AREA(2), // can mien
    SOUTH_NORTH(3); // Bac Nam
    private int value;

    ServiceScope(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
    }
}
