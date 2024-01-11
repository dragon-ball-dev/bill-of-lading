package com.cntt.billoflading.domain.enums;

public enum ServiceDeliver {
    SHIPPING_ECONOMICAL(20),
    SHIPPING_FAST(21),
    SHIPPING_EXPRESS(22),
    SHIPPING_INTERNAL(23),
    SHIPPING_EXTERNAL(24);


    private int value;

    ServiceDeliver(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
    }
}
