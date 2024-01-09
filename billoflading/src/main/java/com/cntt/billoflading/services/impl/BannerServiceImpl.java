package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.models.Banner;
import com.cntt.billoflading.repository.BannerRepository;
import com.cntt.billoflading.services.BannerService;
import com.cntt.billoflading.services.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BannerServiceImpl extends BaseService implements BannerService {

    private final BannerRepository bannerRepository;

    @Override
    public Page<Banner> getAllPageBanner(Integer pageNo, Integer pageSize, String keyword) {
        return null;
    }

    @Override
    public Banner getBannerById(Long id) {
        return null;
    }

    @Override
    public Banner createBanner(Banner banner) {
        return null;
    }

    @Override
    public Banner updateBanner(Long id, Banner banner) {
        return null;
    }

    @Override
    public void deleteBannerById(Long id) {

    }
}
