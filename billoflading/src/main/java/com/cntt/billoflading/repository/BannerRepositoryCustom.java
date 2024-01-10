package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.Banner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BannerRepositoryCustom {
    Page<Banner> searchingBanner(String keyword, Pageable pageable);
}
