package com.cntt.billoflading.controller;

import com.cntt.billoflading.controller.base.BaseController;
import com.cntt.billoflading.domain.models.District;
import com.cntt.billoflading.domain.payload.request.CategoryRequest;
import com.cntt.billoflading.domain.payload.request.DistrictRequest;
import com.cntt.billoflading.services.DistrictService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/district")
@RequiredArgsConstructor
public class DistrictController extends BaseController {

    private final DistrictService districtService;

    @GetMapping
    @Operation(summary = "Get paging of district")
    public ResponseEntity<?> getPageBanner(@RequestParam Integer pageNo, @RequestParam Integer pageSize, @RequestParam String keyword){
        return createSuccessResponse("Get all district", districtService.getAllPageDistrict(pageNo, pageSize, keyword));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get paging of district")
    public ResponseEntity<?> getBannerById(@PathVariable Long id){
        return createSuccessResponse("Get all district", districtService.getDistrictById(id));
    }


    @PostMapping
    @Operation(summary = "Create district")
    public ResponseEntity<?> createBanner(@RequestBody DistrictRequest district){
        return createSuccessResponse("Create district", districtService.createDistrict(district));
    }

    @PostMapping("/{id}")
    @Operation(summary = "Update district")
    public ResponseEntity<?> updateBanner(@PathVariable Long id, @RequestBody DistrictRequest district){
        return createSuccessResponse("Update district", districtService.updateDistrict(id, district));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete district")
    public ResponseEntity<?> deleteBanner(@PathVariable Long id){
        districtService.deleteDistrictById(id);
        return createSuccessResponse("Delete district successfully");
    }
}
