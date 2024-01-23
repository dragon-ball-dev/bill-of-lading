package com.cntt.billoflading.domain.payload.request;

import com.cntt.billoflading.domain.enums.OrderStatus;
import lombok.Data;

@Data
public class UpdateStatusOrder {
    private Long order_id;
    private Long stock_id;

    private OrderStatus status;
}
