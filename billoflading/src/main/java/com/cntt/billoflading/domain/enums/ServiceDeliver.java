package com.cntt.billoflading.domain.enums;

public enum ServiceDeliver {
    SHIPPING_ECONOMICAL(0),// Giao hàng tiết kiệm
    SHIPPING_FAST(1), // Giao hàng nhanh
    SHIPPING_EXPRESS(2), // Giao hàng hỏa tốc
    SHIPPING_INTERNAL(3),// Giao hàng trong nước
    SHIPPING_EXTERNAL(4); // Giao hàng quốc tế


    private int value;

    ServiceDeliver(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
    }
}
