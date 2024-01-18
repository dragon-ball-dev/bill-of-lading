package com.cntt.billoflading.domain.enums;

public enum ServiceScope {
    INTERNAL_PROVINCE(0),// Nội tỉnh
    INTERNAL_AREA(1),// Nội miền
    NEAR_AREA(2), // Cận miền
    SOUTH_NORTH(3); // Bắc nam
    private int value;

    ServiceScope(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
    }
}
