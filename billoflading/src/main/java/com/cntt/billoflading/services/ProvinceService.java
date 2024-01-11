package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.models.Province;
import org.springframework.data.domain.Page;

public interface ProvinceService {

    Page<Province> getAllPageProvince(Integer pageNo, Integer pageSize, String keyword);

    Province getProvinceById(Long id);

    Province createProvince(Province province);

    Province updateProvince(Long id, Province province);

    void deleteProvince(Long id);
}
