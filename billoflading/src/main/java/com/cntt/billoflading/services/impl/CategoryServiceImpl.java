package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.payload.request.CategoryRequest;
import com.cntt.billoflading.domain.payload.response.CategoryResponse;
import com.cntt.billoflading.repository.CategoryRepository;
import com.cntt.billoflading.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public Page<CategoryResponse> getPageCategory(Integer pageNo, Integer pageSize, String keyword) {
        return null;
    }

    @Override
    public CategoryResponse getCategoryById(Long id) {

        return null;
    }

    @Override
    public CategoryRequest createCategory(CategoryRequest categoryRequest) {
        return null;
    }

    @Override
    public CategoryRequest updateCategory(Long id, CategoryRequest categoryRequest) {
        return null;
    }

    @Override
    public void deleteById(Long id) {
        categoryRepository.deleteById(id);
    }
}
