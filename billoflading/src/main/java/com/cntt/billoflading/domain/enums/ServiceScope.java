package com.cntt.billoflading.domain.enums;

public enum ServiceScope {
    INTERNAL_PROVINCE(10),
    INTERNAL_AREA(11),
    NEAR_AREA(12),
    SOUTH_NORTH(13);
    private Integer value;

    ServiceScope(Integer value){
        this.value = value;
    }

    public Integer getValue(){
        return this.value;
    }
}
