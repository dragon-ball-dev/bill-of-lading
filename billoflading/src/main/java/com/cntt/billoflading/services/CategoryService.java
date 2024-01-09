package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.models.Category;
import com.cntt.billoflading.domain.payload.request.CategoryRequest;
import com.cntt.billoflading.domain.payload.response.CategoryResponse;
import org.springframework.data.domain.Page;

public interface CategoryService {
    Page<CategoryResponse> getPageCategory(Integer pageNo, Integer pageSize, String keyword);

    CategoryResponse getCategoryById(Long id);

    CategoryRequest createCategory(CategoryRequest categoryRequest);

    CategoryRequest updateCategory(Long id, CategoryRequest categoryRequest);

    void deleteById(Long id);
}
