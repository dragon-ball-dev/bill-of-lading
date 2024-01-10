package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.models.ServiceTransportation;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import org.springframework.data.domain.Page;

public interface ServiceTransportationService {
    Double calculateFeeService();
    MessageResponse GetServiceById(Long id);
    MessageResponse CreateServiceTransportation();
    MessageResponse UpdateServiceTransportation();
    Page<ServiceTransportation> GetServicePaging();
}
