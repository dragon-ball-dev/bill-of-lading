package com.cntt.billoflading.domain.payload.request;

import com.cntt.billoflading.domain.enums.ServiceDeliver;
import com.cntt.billoflading.domain.enums.ServiceScope;
import com.cntt.billoflading.domain.models.District;
import com.cntt.billoflading.domain.models.Province;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceTransportationRequest {
    private Province provinceSend;

    private District districtSend;

    private Province provinceReceive;

    private District districtReceive;

    private Long weight;

    private Long COD;

    private ServiceDeliver deliveryService;
}
