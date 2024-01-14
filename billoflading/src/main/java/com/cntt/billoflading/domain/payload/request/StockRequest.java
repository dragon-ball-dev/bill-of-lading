package com.cntt.billoflading.domain.payload.request;

import com.cntt.billoflading.domain.models.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StockRequest {
    private String name;
    private Long userId;
}
