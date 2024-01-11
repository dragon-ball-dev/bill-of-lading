package com.cntt.billoflading.controller;

import com.cntt.billoflading.controller.base.BaseController;
import com.cntt.billoflading.domain.models.Province;
import com.cntt.billoflading.domain.payload.request.NewFestRequest;
import com.cntt.billoflading.services.NewFestService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/news")
@RequiredArgsConstructor
public class NewFestController extends BaseController {
    
    private final NewFestService newFestService;

    @GetMapping
    @Operation(summary = "Get paging of news feed")
    public ResponseEntity<?> getPageBanner(@RequestParam Integer pageNo, @RequestParam Integer pageSize, @RequestParam String keyword){
        return createSuccessResponse("Get all news feed", newFestService.getAllNewFest(pageNo, pageSize, keyword));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get paging of news feed")
    public ResponseEntity<?> getBannerById(@PathVariable Long id){
        return createSuccessResponse("Get all news feed", newFestService.getNewFestById(id));
    }


    @PostMapping
    @Operation(summary = "Create news feed")
    public ResponseEntity<?> createBanner(@RequestBody NewFestRequest newFestRequest){
        return createSuccessResponse("Create news feed", newFestService.createNewFest(newFestRequest));
    }

    @PostMapping("/{id}")
    @Operation(summary = "Update news feed")
    public ResponseEntity<?> updateBanner(@PathVariable Long id, @RequestBody NewFestRequest newFestRequest){
        return createSuccessResponse("Update news feed", newFestService.updateNewFeat(id, newFestRequest));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete news feed")
    public ResponseEntity<?> deleteBanner(@PathVariable Long id){
        newFestService.deleteNewFestById(id);
        return createSuccessResponse("Delete news feed successfully");
    }
    
}
