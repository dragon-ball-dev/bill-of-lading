package com.cntt.billoflading.controller;


import com.cntt.billoflading.controller.base.BaseController;
import com.cntt.billoflading.domain.payload.request.StoreRequest;
import com.cntt.billoflading.services.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("store")
public class StoreController extends BaseController {
    @Autowired
    StoreService storeService;

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateStore(@PathVariable Integer id ,@RequestBody StoreRequest storeRequest) {
        storeService.updateStore(id, storeRequest);
        return createSuccessResponse("Update store", "Cập nhật cửa hàng thành công");
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id ){
        return createSuccessResponse(storeService.getById(id));
    }

    @PostMapping("create-store")
    public ResponseEntity<?> createStore(@RequestBody StoreRequest storeRequest) {
        storeService.createStore(storeRequest);
        return createSuccessResponse("create store", "thêm thành công cửa hàng");
    }
    @GetMapping("get-all")
    public Page<StoreRequest> getAll(@RequestParam Integer page, @RequestParam Integer pageSize) {
        return storeService.getAll(page, pageSize);
    }
    @DeleteMapping("delete-store")
    public ResponseEntity<?> deleteStore(@RequestParam Integer id) {
        storeService.deleteStore(id);
        return createSuccessResponse("delete store", null);
    }

    @GetMapping
    public ResponseEntity<StoreRequest> findByName(@RequestParam String name) {
        return storeService.findByName(name);
    }
}
