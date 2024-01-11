package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.models.District;
import com.cntt.billoflading.domain.models.Province;
import com.cntt.billoflading.domain.payload.request.DistrictRequest;
import com.cntt.billoflading.exception.BadRequestException;
import com.cntt.billoflading.repository.DistrictRepository;
import com.cntt.billoflading.repository.ProvinceRepository;
import com.cntt.billoflading.services.DistrictService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DistrictServiceImpl implements DistrictService {

    private final DistrictRepository districtRepository;

    private final ProvinceRepository provinceRepository;
    @Override
    public Page<District> getAllPageDistrict(Integer pageNo, Integer pageSize, String keyword) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        return districtRepository.searchingDistrict(keyword, pageable);
    }

    @Override
    public District getDistrictById(Long id) {
        return districtRepository.findById(id).orElseThrow(() -> new BadRequestException("Không tồn tại huyện."));
    }

    @Override
    public DistrictRequest createDistrict(DistrictRequest districtRequest) {
        Province province = provinceRepository.findById(districtRequest.getProvinceId()).orElseThrow(() -> new BadRequestException("Tỉnh không tồn tại"));
        District district = new District();
        district.setName(district.getName());
        district.setProvince(province);
        districtRepository.save(district);
        return districtRequest;
    }

    @Override
    public DistrictRequest updateDistrict(Long id, DistrictRequest districtRequest) {
        Province province = provinceRepository.findById(districtRequest.getProvinceId()).orElseThrow(() -> new BadRequestException("Tỉnh không tồn tại"));

        District district = districtRepository.findById(id).orElseThrow(() -> new BadRequestException("Không tồn tại huyện."));
        district.setName(district.getName());
        district.setProvince(province);
        districtRepository.save(district);
        return districtRequest;
    }

    @Override
    public void deleteDistrictById(Long id) {
        districtRepository.deleteById(id);
    }
}
