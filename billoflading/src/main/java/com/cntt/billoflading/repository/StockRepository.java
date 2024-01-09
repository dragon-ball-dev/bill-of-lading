package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository  extends JpaRepository<Stock, Long> {
}
