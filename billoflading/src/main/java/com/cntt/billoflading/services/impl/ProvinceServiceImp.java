package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.models.Province;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import com.cntt.billoflading.mapper.CommonMapper;
import com.cntt.billoflading.repository.ProvinceRepository;
import com.cntt.billoflading.services.BaseService;
import com.cntt.billoflading.services.ProvinceService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProvinceServiceImp  extends BaseService implements ProvinceService {
    private final ProvinceRepository provinceRepository;
    private final CommonMapper mapper;

    @Override
    public MessageResponse CreateProvince(String name, String type) {
        Province province = Province.builder()
                .type(type)
                .name(name)
                .build();
        provinceRepository.save(province);
        return MessageResponse.builder().message("createSuccess.").build();

    }

    @Override
    public MessageResponse UpdateProvince(Long id, String name, String type) {
        Province province = provinceRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("province is not exist!"));
        province.setType(type);
        province.setName(name);
        provinceRepository.save(province);
        return MessageResponse.builder().message("updateSuccess.").build();
    }

    @Override
    public Province GetProvinceById(Long id) {
        Province province = provinceRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("province is not exist!"));
        return province;

    }

    @Override
    public Page<Province> GetPagingProvince(Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Province> provincepage = provinceRepository.findAll(pageable);
        return mapper.convertToResponsePage(provincepage, Province.class, pageable);
    }
}
