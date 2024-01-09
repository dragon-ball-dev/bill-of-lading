package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.dto.OrderDTO;
import com.cntt.billoflading.domain.enums.OrderStatus;
import com.cntt.billoflading.domain.models.Order;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import org.springframework.data.domain.Page;

public interface OrderService {
    MessageResponse CreateOrder(OrderDTO orderDTO);
    MessageResponse UpdateOrder(Long id, OrderDTO orderDTO);
    MessageResponse CancelOrder(Long id);
    MessageResponse UpdateStatusOrder(Long id, OrderStatus orderStatus);
    OrderDTO GetOrderById(Long id);
    Page<OrderDTO> getPagingOrderByStatusAndUser(long userId, OrderStatus orderStatus, Integer pageNo, Integer pageSize);
    Page<OrderDTO> getPagingOrderByStock(long stockId, Integer pageNo, Integer pageSize);
    Page<OrderDTO> getPagingOrderByServiceAndUser(long userId, int ServiceId, Integer pageNo, Integer pageSize);

}
