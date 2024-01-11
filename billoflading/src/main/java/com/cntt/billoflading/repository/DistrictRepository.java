package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.District;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DistrictRepository  extends JpaRepository<District, Long>,DistrictRepositoryCustom {
}
