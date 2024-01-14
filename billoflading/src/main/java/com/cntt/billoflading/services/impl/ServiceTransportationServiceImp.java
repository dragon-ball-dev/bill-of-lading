package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.dto.ServiceTransportationDTO;
import com.cntt.billoflading.domain.enums.ServiceDeliver;
import com.cntt.billoflading.domain.enums.ServiceScope;
import com.cntt.billoflading.domain.models.Province;
import com.cntt.billoflading.domain.models.ServiceTransportation;
import com.cntt.billoflading.domain.payload.request.ServiceTransportationRequest;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import com.cntt.billoflading.mapper.CommonMapper;
import com.cntt.billoflading.repository.ProvinceRepository;
import com.cntt.billoflading.repository.ServiceTransportationRepository;
import com.cntt.billoflading.services.BaseService;
import com.cntt.billoflading.services.ServiceTransportationService;
import com.cntt.billoflading.utils.MapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.lang.Math.abs;

@Service
@RequiredArgsConstructor
public class ServiceTransportationServiceImp extends BaseService implements ServiceTransportationService {
    private final ServiceTransportationRepository serviceTransportationRepository;
    private final ProvinceRepository provinceRepository;
    private final CommonMapper mapper;
    private final MapperUtils mapperUtils;


    @Override
    public ServiceTransportationDTO calculateFeeService(ServiceTransportationRequest serviceTransportationRequest) {

        Province receiver_province = provinceRepository.findById(serviceTransportationRequest.getProvinceReceiveId())
                .orElseThrow(() -> new IllegalArgumentException("Receiver province is not exist!"));
        Province sender_province = provinceRepository.findById(serviceTransportationRequest.getProvinceSendId())
                .orElseThrow(() -> new IllegalArgumentException("Sender province is not exist!"));
        return mapper.convertToResponse(calculateDeliverFee(receiver_province
                , sender_province
                ,serviceTransportationRequest.getCOD()
                ,serviceTransportationRequest.getWeight()
                ,serviceTransportationRequest.getDeliveryService()
        ), ServiceTransportationDTO.class);
    }


    private int weightClassify(long weight) {
        if (weight < 0) return -1;
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

    private double calculateWeight(long weight) {
        if (weight < 2000) return 0;
        return (double) weight / 2000;
    }

    public ServiceTransportation calculateDeliverFee(Province receiver, Province sender, Long COD, Long weight, ServiceDeliver serviceDeliver) {
        int weightClassification = weightClassify(weight);
        if (weightClassification == -1) throw new IllegalArgumentException("weight is not valid!");

        int typeAreaSend = sender.getType().getValue();
        int typeAreaReceiver = receiver.getType().getValue();
        int serviceScope = 0;

        if (typeAreaReceiver == typeAreaSend) {
            if (sender.equals(receiver)) {
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
                findServiceForCalculate(serviceScope, weightClassification, serviceDeliver.getValue())
                .orElseThrow(() -> new IllegalArgumentException("ServiceTransportation is not exist!"));

        if (weight == 7) {
            weight--;
            ServiceTransportation serviceTransportationOver = serviceTransportationRepository.
                    findServiceForCalculate(serviceScope, weightClassification, serviceDeliver.getValue())
                    .orElseThrow(() -> new IllegalArgumentException("ServiceTransportation is not exist!"));
            serviceTransportationOver.setPrice(serviceTransportationOver.getPrice() + COD/20 + calculateWeight(weight)
                    * serviceTransportationOver.getPrice());
            return  serviceTransportationOver;
        }
        serviceTransportation.setPrice(serviceTransportation.getPrice() + COD/20) ;
        return serviceTransportation;
    }

    @Override
    public ServiceTransportation GetServiceById(Long id) {
        ServiceTransportation serviceTransportation = serviceTransportationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("ServiceTransportation is not exist!"));
        return mapper.convertToResponse(serviceTransportation, ServiceTransportation.class);
    }

    @Override
    public MessageResponse CreateServiceTransportation(ServiceTransportationDTO serviceTransportationDTO) {
        ServiceTransportation serviceTransportation = mapperUtils.convertToEntity(serviceTransportationDTO, ServiceTransportation.class);
        serviceTransportationRepository.save(serviceTransportation);
        return MessageResponse.builder().message("CreateSuccess!").build();
    }

    @Override
    public MessageResponse UpdateServiceTransportation(Long id, ServiceTransportationDTO serviceTransportationDTO) {
        ServiceTransportation service = serviceTransportationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("ServiceTransportation is not exist!"));
        service.setServiceDeliver(serviceTransportationDTO.getServiceDeliver());
        service.setServiceScope(serviceTransportationDTO.getServiceScope());
        service.setWeightService(serviceTransportationDTO.getWeightService());
        service.setPrice(serviceTransportationDTO.getPrice());
        service.setCurrency(serviceTransportationDTO.getCurrency());
        service.setEstimatedTime(serviceTransportationDTO.getEstimatedTime());
        service.setWeightUnit(serviceTransportationDTO.getWeightUnit());
        serviceTransportationRepository.save(service);

        return MessageResponse.builder().message("UpdateSuccess!").build();

    }

    @Override
    public Page<ServiceTransportation> GetServicePaging(Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        List<ServiceTransportation> list = mapper.convertToResponseList(serviceTransportationRepository.findAll(), ServiceTransportation.class);
        return new PageImpl<>(list, pageable, list.size());
    }
}
