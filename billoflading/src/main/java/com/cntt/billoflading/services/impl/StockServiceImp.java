package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.models.Stock;
import com.cntt.billoflading.domain.models.User;
import com.cntt.billoflading.domain.payload.request.StockRequest;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import com.cntt.billoflading.repository.StockRepository;
import com.cntt.billoflading.repository.UserRepository;
import com.cntt.billoflading.services.BaseService;
import com.cntt.billoflading.services.StockService;
import com.cntt.billoflading.utils.MapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class StockServiceImp extends BaseService implements StockService {
    private final StockRepository stockRepository;
    private final UserRepository userRepository;
    @Override
    public MessageResponse createStock(StockRequest stockRequest) {
        Stock stock = Stock.builder()
                .name(stockRequest.getName()).build();
        User user = userRepository.findById(stockRequest.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("user is not exist!"));
        Set<User> users = new HashSet<>();
        users.add(user);
        stock.setUsers(users);
        stockRepository.save(stock);
        return MessageResponse.builder().message("CreateSuccess.").build();
    }

    @Override
    public MessageResponse updateNameStock(Long id, String name) {
        Stock stock = stockRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Stock is not exist!"));
        stock.setName(name);
        stockRepository.save(stock);
        return MessageResponse.builder().message("UpdateSuccess.").build();
    }

    @Override
    public MessageResponse deleteStock(long id) {
        return null;
    }

    @Override
    public Stock getStockById(Long id) {
        return stockRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Stock is not exist!"));
    }

    @Override
    public Page<Stock> getAllOrder(Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        return stockRepository.findAll(pageable);
    }
}
