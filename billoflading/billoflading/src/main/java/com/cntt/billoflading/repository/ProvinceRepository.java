package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.Province;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProvinceRepository  extends JpaRepository<Province, Long> {
}
