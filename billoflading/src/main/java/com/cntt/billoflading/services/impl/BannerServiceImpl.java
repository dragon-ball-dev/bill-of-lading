package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.models.Banner;
import com.cntt.billoflading.exception.BadRequestException;
import com.cntt.billoflading.repository.BannerRepository;
import com.cntt.billoflading.services.BannerService;
import com.cntt.billoflading.services.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BannerServiceImpl extends BaseService implements BannerService {

    private final BannerRepository bannerRepository;

    @Override
    public Page<Banner> getAllPageBanner(Integer pageNo, Integer pageSize, String keyword) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        return bannerRepository.searchingBanner(keyword, pageable);
    }

    @Override
    public Banner getBannerById(Long id) {
        return bannerRepository.findById(id).orElseThrow(() ->  new BadRequestException("Không tồn tại banner này"));
    }

    @Override
    public Banner createBanner(Banner banner) {
        banner.setUserId(getUserId());
        banner.setStatus(false);
        bannerRepository.save(banner);
        return banner;
    }

    @Override
    public Banner updateBanner(Long id, Banner banner) {
        Banner b = bannerRepository.findById(id).orElseThrow(() ->  new BadRequestException("Không tồn tại banner này"));
        b.setName(banner.getName());
        b.setHeight(banner.getHeight());
        b.setWidth(banner.getWidth());
        b.setImageUrl(banner.getImageUrl());
        bannerRepository.save(b);
        return banner;
    }

    @Override
    public void deleteBannerById(Long id) {
        bannerRepository.deleteById(id);
    }
}
