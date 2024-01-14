package com.cntt.billoflading.domain.enums;

public enum ServiceScope {
    INTERNAL_PROVINCE(0),
    INTERNAL_AREA(1),
    NEAR_AREA(2),
    SOUTH_NORTH(3);
    private int value;

    ServiceScope(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
    }
}
