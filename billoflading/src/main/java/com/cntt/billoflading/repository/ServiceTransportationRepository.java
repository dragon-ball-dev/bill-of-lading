package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.ServiceTransportation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceTransportationRepository extends JpaRepository<ServiceTransportation, Long> {
}
