package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.enums.ServiceDeliver;
import com.cntt.billoflading.domain.enums.ServiceScope;
import com.cntt.billoflading.domain.models.ServiceTransportation;

import java.util.Optional;

public interface ServiceRepositoryCustom {
    Optional<ServiceTransportation> findByTypeServiceScope(ServiceScope serviceScope);

}
