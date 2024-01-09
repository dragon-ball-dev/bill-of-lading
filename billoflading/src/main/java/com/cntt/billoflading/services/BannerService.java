package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.models.Banner;
import org.springframework.data.domain.Page;

public interface BannerService {
    Page<Banner> getAllPageBanner(Integer pageNo, Integer pageSize, String keyword);

    Banner getBannerById(Long id);

    Banner createBanner(Banner banner);

    Banner updateBanner(Long id, Banner banner);

    void deleteBannerById(Long id);
}
