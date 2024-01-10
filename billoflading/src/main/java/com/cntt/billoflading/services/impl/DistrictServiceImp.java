package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.models.District;
import com.cntt.billoflading.domain.models.Province;
import com.cntt.billoflading.domain.payload.request.DistrictRequest;
import com.cntt.billoflading.domain.payload.response.CategoryResponse;
import com.cntt.billoflading.domain.payload.response.DistrictResponse;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import com.cntt.billoflading.exception.BadRequestException;
import com.cntt.billoflading.mapper.CommonMapper;
import com.cntt.billoflading.repository.DistrictRepository;
import com.cntt.billoflading.repository.ProvinceRepository;
import com.cntt.billoflading.services.BaseService;
import com.cntt.billoflading.services.DistrictService;
import com.cntt.billoflading.utils.MapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DistrictServiceImp extends BaseService implements DistrictService {
    private final ProvinceRepository provinceRepository;
    private final CommonMapper mapper;
    private final DistrictRepository districtRepository;
    @Override
    public MessageResponse CreateDistrict(DistrictRequest districtRequest) {
        Province province = provinceRepository.findById(districtRequest.getProvinceId())
                .orElseThrow(() -> new IllegalArgumentException("province is not exist!"));
        District district = District.builder()
                .name(districtRequest.getName())
                .province(province)
                .build();
        districtRepository.save(district);
        return MessageResponse.builder().message("createSuccess.").build();
    }

    @Override
    public MessageResponse UpdateDistrict(Long id, DistrictRequest districtRequest) {
        District district = districtRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("District is not exist!"));
        Province province = provinceRepository.findById(districtRequest.getProvinceId())
                .orElseThrow(() -> new IllegalArgumentException("province is not exist!"));
        district.setProvince(province);
        district.setName(districtRequest.getName());
        districtRepository.save(district);
        return MessageResponse.builder().message("updateSuccess.").build();
    }

    @Override
    public District GetDistrictById(Long id) {
        return  districtRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("District is not exist!"));
    }

    @Override
    public Page<District> GetPagingDistrict(Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<District> district = districtRepository.findAll(pageable);
        return mapper.convertToResponsePage(district, District.class, pageable);

    }

    @Override
    public Page<District> GetPagingDistrictByProvince(Long provinceId, Integer pageNo, Integer pageSize) {
        return null;
    }
}
