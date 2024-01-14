package com.cntt.billoflading.domain.dto;

import com.cntt.billoflading.domain.enums.OrderStatus;
import com.cntt.billoflading.domain.enums.ServiceDeliver;
import com.cntt.billoflading.domain.models.Stock;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

    private Long id;

    private String description;

    private Long user_id;

    private Long delivery_fee;

    private ServiceDeliver serviceDeliver;

    private Long category_id;

    private String country;

    private String receiver_info;

    private Long receiver_Province_Id;

    private Long sender_Province_Id;

    private String sender_info;

    private OrderStatus status;

    private Long cod;

    private Long stockId ;

    private Long weight;



}
