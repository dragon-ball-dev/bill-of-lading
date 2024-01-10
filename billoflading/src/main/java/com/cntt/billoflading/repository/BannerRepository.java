package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.Banner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BannerRepository extends JpaRepository<Banner, Long> , BannerRepositoryCustom{
}
