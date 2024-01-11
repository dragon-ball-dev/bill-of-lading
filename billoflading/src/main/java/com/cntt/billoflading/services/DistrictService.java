package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.models.District;
import com.cntt.billoflading.domain.payload.request.DistrictRequest;
import org.springframework.data.domain.Page;

public interface DistrictService {
    Page<District> getAllPageDistrict(Integer pageNo, Integer pageSize, String keyword);

    District getDistrictById(Long id);

    DistrictRequest createDistrict(DistrictRequest districtRequest);

    DistrictRequest updateDistrict(Long id, DistrictRequest districtRequest);

    void deleteDistrictById(Long id);
}
