package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.dto.ServiceTransportationDTO;
import com.cntt.billoflading.domain.models.ServiceTransportation;
import com.cntt.billoflading.domain.payload.request.ServiceTransportationRequest;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import org.springframework.data.domain.Page;

public interface ServiceTransportationService {
    ServiceTransportationDTO calculateFeeService(ServiceTransportationRequest serviceTransportationRequest);
    ServiceTransportation GetServiceById(Long id);
    MessageResponse CreateServiceTransportation(ServiceTransportationDTO serviceTransportationDTO);
    MessageResponse UpdateServiceTransportation(Long id, ServiceTransportationDTO serviceTransportationDTO);
    Page<ServiceTransportation> GetServicePaging(Integer pageNo, Integer pageSize);
}
