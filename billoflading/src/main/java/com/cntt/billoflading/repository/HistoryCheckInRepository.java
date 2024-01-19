package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.HistoryCheckIn;
import com.cntt.billoflading.domain.models.Order;
import com.cntt.billoflading.domain.models.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HistoryCheckInRepository extends JpaRepository<HistoryCheckIn, Long> {
    @Override
    Optional<HistoryCheckIn> findById(Long id);

    Optional<HistoryCheckIn> findByOrder(Order order);

    Optional<HistoryCheckIn> findByStock(Stock stock);
}
