package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.enums.ServiceDeliver;
import com.cntt.billoflading.domain.enums.ServiceScope;
import com.cntt.billoflading.domain.models.ServiceTransportation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.Optional;

public interface ServiceTransportationRepository extends JpaRepository<ServiceTransportation, Long> {
    @Query(value = "SELECT * FROM service_transportation st WHERE st.service_scope = :serviceScope  AND st.weight = :weight AND st.service_deliver = :serviceDeliver", nativeQuery = true)
    Optional<ServiceTransportation> findServiceForCalculate(Integer serviceScope,Integer weight,Integer serviceDeliver);
}
