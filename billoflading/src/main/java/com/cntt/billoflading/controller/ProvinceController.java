package com.cntt.billoflading.controller;

import com.cntt.billoflading.controller.base.BaseController;
import com.cntt.billoflading.domain.models.Province;
import com.cntt.billoflading.domain.payload.request.DistrictRequest;
import com.cntt.billoflading.services.ProvinceService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/province")
@RequiredArgsConstructor
public class ProvinceController extends BaseController {

    private final ProvinceService provinceService;

    @GetMapping
    @Operation(summary = "Get paging of province")
    public ResponseEntity<?> getPageBanner(@RequestParam Integer pageNo, @RequestParam Integer pageSize, @RequestParam String keyword){
        return createSuccessResponse("Get all province", provinceService.getAllPageProvince(pageNo, pageSize, keyword));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get paging of province")
    public ResponseEntity<?> getBannerById(@PathVariable Long id){
        return createSuccessResponse("Get all province", provinceService.getProvinceById(id));
    }


    @PostMapping
    @Operation(summary = "Create province")
    public ResponseEntity<?> createBanner(@RequestBody Province province){
        return createSuccessResponse("Create province", provinceService.createProvince(province));
    }

    @PostMapping("/{id}")
    @Operation(summary = "Update province")
    public ResponseEntity<?> updateBanner(@PathVariable Long id, @RequestBody Province province){
        return createSuccessResponse("Update province", provinceService.updateProvince(id, province));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete province")
    public ResponseEntity<?> deleteBanner(@PathVariable Long id){
        provinceService.deleteProvince(id);
        return createSuccessResponse("Delete province successfully");
    }
}
