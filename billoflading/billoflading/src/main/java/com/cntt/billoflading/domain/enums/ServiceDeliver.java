package com.cntt.billoflading.domain.enums;

public enum ServiceDeliver {
    SHIPPING_ECONOMICAL("SHIPPING_ECONOMICAL"),
    SHIPPING_FAST("SHIPPING_FAST"),
    SHIPPING_EXPRESS("SHIPPING_EXPRESS"),
    SHIPPING_INTERNAL("SHIPPING_INTERNAL"),
    SHIPPING_EXTERNAL("SHIPPING_EXTERNAL");


    private String value;

    ServiceDeliver(String value){
        this.value = value;
    }

    public String getValue(){
        return this.value;
    }
}
