package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.models.Province;
import com.cntt.billoflading.exception.BadRequestException;
import com.cntt.billoflading.repository.ProvinceRepository;
import com.cntt.billoflading.services.ProvinceService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProvinceServiceImpl implements ProvinceService {

    private final ProvinceRepository provinceRepository;
    @Override
    public Page<Province> getAllPageProvince(Integer pageNo, Integer pageSize, String keyword) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        return provinceRepository.searchingByProvince(keyword, pageable);
    }

    @Override
    public Province getProvinceById(Long id) {
        return provinceRepository.findById(id).orElseThrow(() -> new BadRequestException("Tỉnh không tồn tại."));
    }

    @Override
    public Province createProvince(Province province) {
        provinceRepository.save(province);
        return province;
    }

    @Override
    public Province updateProvince(Long id, Province province) {
        Province p = provinceRepository.findById(id).orElseThrow(() -> new BadRequestException("Tỉnh không tồn tại."));
        p.setName(province.getName());
        p.setType(province.getType());
        provinceRepository.save(p);
        return province;
    }

    @Override
    public void deleteProvince(Long id) {
        provinceRepository.deleteById(id);
    }
}
