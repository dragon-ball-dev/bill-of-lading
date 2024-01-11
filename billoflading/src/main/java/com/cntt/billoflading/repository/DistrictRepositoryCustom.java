package com.cntt.billoflading.repository;


import com.cntt.billoflading.domain.models.District;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface DistrictRepositoryCustom {

    Page<District> searchingDistrict(String keyword, Pageable pageable);
}
