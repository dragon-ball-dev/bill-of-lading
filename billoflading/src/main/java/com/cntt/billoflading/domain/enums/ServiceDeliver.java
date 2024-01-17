package com.cntt.billoflading.domain.enums;

public enum ServiceDeliver {
    SHIPPING_ECONOMICAL(0),// giao hang tiet kiem
    SHIPPING_FAST(1), // Giao hang nhanh
    SHIPPING_EXPRESS(2), // giao hang hoa toc
    SHIPPING_INTERNAL(3),// giao hang trong nuoc
    SHIPPING_EXTERNAL(4); // giao hang quoc te


    private int value;

    ServiceDeliver(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
    }
}
