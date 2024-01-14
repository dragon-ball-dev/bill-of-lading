package com.cntt.billoflading.domain.payload.request;

import lombok.Data;

@Data
public class StoreRequest {
    private Integer id;
    private String name;
    private String address;
    private String phone;
    private String email;
}
