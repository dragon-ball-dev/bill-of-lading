package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.enums.ServiceDeliver;
import com.cntt.billoflading.domain.enums.ServiceScope;
import com.cntt.billoflading.domain.models.ServiceTransportation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Optional;

public interface ServiceTransportationRepository extends JpaRepository<ServiceTransportation, Long> {
    @Query(value = "SELECT * FROM service_transportation st WHERE st.service_scope = :serviceScope AND st.weight_service = :weight AND st.service_deliver = :serviceDeliver LIMIT 1", nativeQuery = true)
    Optional<ServiceTransportation> findServiceForCalculate(@Param("serviceScope") Integer serviceScope, @Param("weight") Integer weight, @Param("serviceDeliver") Integer serviceDeliver);


    Optional<ServiceTransportation> findServiceTransportationByServiceDeliver(ServiceDeliver serviceDeliver);
}
