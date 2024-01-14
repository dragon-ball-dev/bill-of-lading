package com.cntt.billoflading.services;


import com.cntt.billoflading.domain.payload.request.StoreRequest;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

public interface StoreService {
    void createStore(StoreRequest storeRequest);
    Page<StoreRequest> getAll(Integer page, Integer pageSize);
    void deleteStore(Integer id);
    ResponseEntity<StoreRequest> findByName(String name);
    ResponseEntity<StoreRequest> getById(Integer id);

    void updateStore(Integer id, StoreRequest storeRequest);
}
