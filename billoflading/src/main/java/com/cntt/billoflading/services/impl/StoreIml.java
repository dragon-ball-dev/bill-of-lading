package com.cntt.billoflading.services.impl;


import com.cntt.billoflading.domain.models.Store;
import com.cntt.billoflading.domain.payload.request.StoreRequest;
import com.cntt.billoflading.exception.BadRequestException;
import com.cntt.billoflading.repository.StoreRepository;
import com.cntt.billoflading.repository.UserRepository;
import com.cntt.billoflading.services.StoreService;
import com.cntt.billoflading.utils.MapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StoreIml implements StoreService {
    @Autowired
    StoreRepository storeRepository;

    @Autowired
    UserRepository userRepository;
    private final MapperUtils mapperUtils;

    public StoreIml(MapperUtils mapperUtils) {
        this.mapperUtils = mapperUtils;
    }

    @Override
    public void createStore(StoreRequest storeRequest) {
        List<Store> storeList = storeRepository.findAll();
        for (Store store : storeList) {
            if (store.getEmail().equals(storeRequest.getEmail())) {
                throw new BadRequestException("Địa chỉ email cửa hàng đã tồn tài");
            }
        }
        Store store = new Store();
        store.setName(storeRequest.getName());
        store.setEmail(storeRequest.getEmail());
        store.setPhone(storeRequest.getPhone());
        store.setAddress(storeRequest.getAddress());
        storeRepository.save(store);
    }

    @Override
    public Page<StoreRequest> getAll(Integer page, Integer pageSize) {
        Pageable pageable = PageRequest.of(page, pageSize);
        Page<Store> storePage = storeRepository.findAll(pageable);
        return mapperUtils.convertToResponsePage(storePage, StoreRequest.class, pageable);
    }

    @Override
    public void deleteStore(Integer id) {
        Optional<Store> storeOptional = storeRepository.findById(id);
        if (storeOptional.isPresent()) {
            Store store = storeOptional.get();
            storeRepository.delete(store);
        } else {
            throw new BadRequestException("Không tìm thấy cửa hàng");
        }
    }

    @Override
    public ResponseEntity<StoreRequest> findByName(String name) {
        Store store = storeRepository.findByName(name);
        if (store == null) {
            throw new BadRequestException("không tìm thấy cửa hàng");
        }
        return new ResponseEntity<>(mapperUtils.convertToResponse(store, StoreRequest.class), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<StoreRequest> getById(Integer id) {
        Store store = storeRepository.findById(id).get();
        if (store == null) {
            throw new BadRequestException("không tìm thấy cửa hàng");
        }
        StoreRequest storeRequest = mapperUtils.convertToResponse(store, StoreRequest.class);
        return new ResponseEntity<>(storeRequest, HttpStatus.OK);
    }



    @Override
    public void updateStore(Integer id, StoreRequest storeRequest) {
        Store store = storeRepository.findById(id).orElseThrow(() -> new BadRequestException("Cửa hàng không tồn tại"));
        store.setAddress(storeRequest.getAddress());
        store.setEmail(storeRequest.getEmail());
        store.setPhone(storeRequest.getPhone());
        store.setName(storeRequest.getName());
        storeRepository.save(store);
    }

}
