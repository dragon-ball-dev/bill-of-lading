package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.models.Stock;
import com.cntt.billoflading.domain.payload.request.StockRequest;
import com.cntt.billoflading.domain.payload.response.MessageResponse;

public interface StockService {
    MessageResponse createStock(StockRequest stockRequest);
    MessageResponse updateNameStock(Long id, String name);
    MessageResponse deleteStock(long id);
    Stock getStockById(Long id);
}
