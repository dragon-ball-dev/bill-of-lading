package com.cntt.billoflading.domain.enums;

public enum ServiceDeliver {
    SHIPPING_ECONOMICAL(0),
    SHIPPING_FAST(1),
    SHIPPING_EXPRESS(2),
    SHIPPING_INTERNAL(3),
    SHIPPING_EXTERNAL(4);


    private int value;

    ServiceDeliver(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
    }
}
