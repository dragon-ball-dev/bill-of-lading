package com.cntt.billoflading.domain.dto;

import com.cntt.billoflading.domain.enums.ServiceDeliver;
import com.cntt.billoflading.domain.enums.ServiceScope;
import com.cntt.billoflading.domain.enums.WeightService;
import com.cntt.billoflading.domain.enums.WeightUnit;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceTransportationDTO {
    private ServiceDeliver serviceDeliver;

    private ServiceScope serviceScope;

    private Double price;

    private String currency;

    private WeightUnit weightUnit;

    private WeightService weightService;

    private String estimatedTime ;
}
