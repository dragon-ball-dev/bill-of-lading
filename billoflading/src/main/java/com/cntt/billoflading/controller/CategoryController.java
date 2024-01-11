package com.cntt.billoflading.controller;

import com.cntt.billoflading.controller.base.BaseController;
import com.cntt.billoflading.domain.models.Banner;
import com.cntt.billoflading.domain.payload.request.CategoryRequest;
import com.cntt.billoflading.services.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
public class CategoryController extends BaseController {

    private final CategoryService categoryService;

    @GetMapping
    @Operation(summary = "Get paging of category")
    public ResponseEntity<?> getPageBanner(@RequestParam Integer pageNo, @RequestParam Integer pageSize, @RequestParam String keyword){
        return createSuccessResponse("Get all category", categoryService.getPageCategory(pageNo, pageSize, keyword));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get paging of category")
    public ResponseEntity<?> getBannerById(@PathVariable Long id){
        return createSuccessResponse("Get all category", categoryService.getCategoryById(id));
    }


    @PostMapping
    @Operation(summary = "Create category")
    public ResponseEntity<?> createBanner(@RequestBody CategoryRequest categoryRequest){
        return createSuccessResponse("Create category", categoryService.createCategory(categoryRequest));
    }

    @PostMapping("/{id}")
    @Operation(summary = "Update category")
    public ResponseEntity<?> updateBanner(@PathVariable Long id, @RequestBody CategoryRequest categoryRequest){
        return createSuccessResponse("Update category", categoryService.updateCategory(id, categoryRequest));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete category")
    public ResponseEntity<?> deleteBanner(@PathVariable Long id){
        categoryService.deleteById(id);
        return createSuccessResponse("Delete category successfully");
    }
}
