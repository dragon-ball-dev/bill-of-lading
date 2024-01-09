package com.cntt.billoflading.domain.enums;

public enum OrderStatus {
    STATUS_PENDING("STATUS_PENDING"),
    STATUS_TO_SHIP("ROLE_ADMIN"),
    STATUS_TO_RECEIVER("ROLE_RENTALER"),
    STATUS_COMPLETED("STATUS_COMPLETED"),
    STATUS_CANCELLED("STATUS_CANCELLED"),
    STATUS_REFUND("STATUS_REFUND");


    private String value;

    OrderStatus(String value){
        this.value = value;
    }

    public String getValue(){
        return this.value;
    }
}
