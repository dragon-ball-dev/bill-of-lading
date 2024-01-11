package com.cntt.billoflading.domain.enums;

public enum TypeProvince {
    PROVINCE_NORTH(1),
    PROVINCE_MIDDlE(2),
    PROVINCE_SOUTH(3);

    private Integer value;

    TypeProvince(Integer value){
        this.value = value;
    }

    public Integer getValue(){
        return this.value;
    }
}
