package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.models.District;
import com.cntt.billoflading.domain.models.Province;
import com.cntt.billoflading.domain.payload.request.DistrictRequest;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import org.springframework.data.domain.Page;

public interface DistrictService {
    MessageResponse CreateDistrict(DistrictRequest districtRequest);
    MessageResponse UpdateDistrict(Long id,DistrictRequest districtRequest);
    District GetDistrictById(Long id);
    Page<District> GetPagingDistrict(Integer pageNo, Integer pageSize);
    Page<District> GetPagingDistrictByProvince(Long provinceId,Integer pageNo, Integer pageSize);
}
