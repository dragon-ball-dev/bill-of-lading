package com.cntt.billoflading.domain.enums;

public enum WeightService {
    FROM0_50GRAM(0),
    FROM50_100GRAM(1),
    FROM100_250GRAM(2),
    FROM250_500GRAM(3),
    FROM500_1000GRAM(4),
    FROM1000_1500GRAM(5),
    FROM1500_2000GRAM(6),
    MORE2000GRAM(7);
    
    private int value;

    WeightService(int value){
        this.value = value;
    }

    public int getValue(){
        return this.value;
    }
}
