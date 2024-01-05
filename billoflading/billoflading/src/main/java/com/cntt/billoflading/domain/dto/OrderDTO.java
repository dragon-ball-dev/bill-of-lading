package com.cntt.billoflading.domain.dto;

import com.cntt.billoflading.domain.enums.OrderStatus;
import com.cntt.billoflading.domain.models.Category;
import com.cntt.billoflading.domain.models.Service;
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

    private Service service;

    private Category category;

    private String country;

    private String receiver_info;

    private String sender_info;

    private OrderStatus status;

    private Double cod;

    private Stock stock ;


}
