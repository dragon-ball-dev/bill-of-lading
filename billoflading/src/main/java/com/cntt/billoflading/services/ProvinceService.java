package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.models.Province;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import org.springframework.data.domain.Page;

public interface ProvinceService {
    MessageResponse CreateProvince(String name, String type);
    MessageResponse UpdateProvince(Long id,String name, String type);
    Province GetProvinceById(Long id);
    Page<Province> GetPagingProvince(Integer pageNo, Integer pageSize);


}
