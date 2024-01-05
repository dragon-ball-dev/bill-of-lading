package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.Order;
import com.cntt.billoflading.domain.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
