package com.cntt.billoflading.domain.enums;

public enum TypeProvince {
    PROVINCE_NORTH(0),
    PROVINCE_MIDDlE(1),
    PROVINCE_SOUTH(2);

    private int value;

    TypeProvince(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
    }
}
