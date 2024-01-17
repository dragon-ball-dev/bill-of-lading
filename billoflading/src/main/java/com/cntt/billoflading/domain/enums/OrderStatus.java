package com.cntt.billoflading.domain.enums;

public enum OrderStatus {
    STATUS_PENDING("STATUS_PENDING"), // dang xu ly
    STATUS_TO_SHIP("STATUS_TO_SHIP"), // dang van chuyen
    STATUS_TO_RECEIVER("STATUS_TO_RECEIVER"), // dang giao hang
    STATUS_COMPLETED("STATUS_COMPLETED"), // hoan thanh
    STATUS_CANCELLED("STATUS_CANCELLED"),// huy
    STATUS_REFUND("STATUS_REFUND");// hoan tra


    private String value;

    OrderStatus(String value){
        this.value = value;
    }

    public String getValue(){
        return this.value;
    }
}
