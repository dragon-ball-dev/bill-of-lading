package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderRepositoryCustom {
    Page<Order> getAllOrderByUserId(Long userId, Pageable pageable);
    Page<Order> getAllOrderByStatus(Long userId, Pageable pageable);
    Page<Order> getAllOrderByStock(Long userId, Pageable pageable);

}
