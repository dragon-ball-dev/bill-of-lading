package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.enums.OrderStatus;
import com.cntt.billoflading.domain.models.Order;
import com.cntt.billoflading.domain.models.ServiceTransportation;
import com.cntt.billoflading.domain.models.Stock;
import com.cntt.billoflading.domain.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Page<Order> findByUserAndStatus(User user, OrderStatus orderStatus, Pageable pageable);
    Page<Order> findByStock(Stock Stock, Pageable pageable);
    Page<Order> findByUserAndServiceTransportation(User userId, ServiceTransportation serviceTransportation, Pageable pageable);

}
