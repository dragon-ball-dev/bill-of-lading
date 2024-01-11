package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.Province;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProvinceRepositoryCustom {

    Page<Province> searchingByProvince(String keyword, Pageable pageable);
}
