package com.cntt.billoflading.controller;

import com.cntt.billoflading.controller.base.BaseController;
import com.cntt.billoflading.domain.models.Banner;
import com.cntt.billoflading.services.BannerService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/banner")
@RequiredArgsConstructor
public class BannerController extends BaseController {

    private final BannerService bannerService;

    @GetMapping
    @Operation(summary = "Get paging of banner")
    public ResponseEntity<?> getPageBanner(@RequestParam Integer pageNo, @RequestParam Integer pageSize, @RequestParam String keyword){
        return createSuccessResponse("Get all banner", bannerService.getAllPageBanner(pageNo, pageSize, keyword));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get paging of banner")
    public ResponseEntity<?> getBannerById(@PathVariable Long id){
        return createSuccessResponse("Get all banner", bannerService.getBannerById(id));
    }


    @PostMapping
    @Operation(summary = "Create banner")
    public ResponseEntity<?> createBanner(@RequestBody Banner banner){
        return createSuccessResponse("Create banner", bannerService.createBanner(banner));
    }

    @PostMapping("/{id}")
    @Operation(summary = "Update banner")
    public ResponseEntity<?> updateBanner(@PathVariable Long id, @RequestBody Banner banner){
        return createSuccessResponse("Update banner", bannerService.updateBanner(id, banner));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete banner")
    public ResponseEntity<?> deleteBanner(@PathVariable Long id){
        bannerService.deleteBannerById(id);
        return createSuccessResponse("Delete banner successfully");
    }

}
