package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.models.ServiceTransportation;
import com.cntt.billoflading.domain.payload.request.ServiceTransportationRequest;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import org.springframework.data.domain.Page;

public interface ServiceTransportationService {
    ServiceTransportation calculateFeeService(ServiceTransportationRequest serviceTransportationRequest);
    MessageResponse GetServiceById(Long id);
    MessageResponse CreateServiceTransportation();
    MessageResponse UpdateServiceTransportation();
    Page<ServiceTransportation> GetServicePaging();
}
