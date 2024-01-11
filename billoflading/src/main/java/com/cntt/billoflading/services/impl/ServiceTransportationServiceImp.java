package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.enums.ServiceScope;
import com.cntt.billoflading.domain.models.ServiceTransportation;
import com.cntt.billoflading.domain.payload.request.ServiceTransportationRequest;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import com.cntt.billoflading.repository.ProvinceRepository;
import com.cntt.billoflading.repository.ServiceTransportationRepository;
import com.cntt.billoflading.services.BaseService;
import com.cntt.billoflading.services.ServiceTransportationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import static java.lang.Math.abs;

@Service
@RequiredArgsConstructor
public class ServiceTransportationServiceImp extends BaseService implements ServiceTransportationService {
    private final ProvinceRepository provinceRepository;
    private final ServiceTransportationRepository serviceTransportationRepository;

    @Override
    public ServiceTransportation calculateFeeService(ServiceTransportationRequest serviceTransportationRequest) {
        int typeAreaSend = serviceTransportationRequest.getProvinceSend().getType().getValue();
        int typeAreaReceiver = serviceTransportationRequest.getProvinceReceive().getType().getValue();

        String ProvinceSend = serviceTransportationRequest.getProvinceSend().getName();
        String ProvinceReceiver = serviceTransportationRequest.getProvinceReceive().getName();

        int serviceScope = 0;
        int weight = weightClassify(serviceTransportationRequest.getWeight());

        if (typeAreaReceiver == typeAreaSend) {
            if (ProvinceSend.equals(ProvinceReceiver)) {
                serviceScope = ServiceScope.INTERNAL_PROVINCE.getValue();
            } else {
                serviceScope = ServiceScope.INTERNAL_AREA.getValue();
            }
        } else if (abs(typeAreaReceiver - typeAreaSend) == 1) {
            serviceScope = ServiceScope.NEAR_AREA.getValue();
        } else if (abs(typeAreaReceiver - typeAreaSend) == 2) {
            serviceScope = ServiceScope.SOUTH_NORTH.getValue();
        }
        ServiceTransportation serviceTransportation = serviceTransportationRepository.
                findServiceForCalculate(serviceScope, weight, serviceTransportationRequest.getDeliveryService().getValue())
                .orElseThrow(() -> new IllegalArgumentException("ServiceTransportation is not exist!"));
        return serviceTransportation;
    }


    private int weightClassify(long weight) {
        if (weight <= 50) {
            return 0;
        } else if (weight <= 100) {
            return 1;
        } else if (weight <= 250) {
            return 2;
        } else if (weight <= 500) {
            return 3;
        } else if (weight <= 1000) {
            return 4;
        } else if (weight <= 1500) {
            return 5;
        } else if (weight <= 2000) {
            return 6;
        } else {
            return 7;
        }
    }

    @Override
    public MessageResponse GetServiceById(Long id) {
        return null;
    }

    @Override
    public MessageResponse CreateServiceTransportation() {
        return null;
    }

    @Override
    public MessageResponse UpdateServiceTransportation() {
        return null;
    }

    @Override
    public Page<ServiceTransportation> GetServicePaging() {
        return null;
    }
}
