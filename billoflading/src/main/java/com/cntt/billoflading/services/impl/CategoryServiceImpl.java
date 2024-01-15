package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.models.Category;
import com.cntt.billoflading.domain.payload.request.CategoryRequest;
import com.cntt.billoflading.domain.payload.response.CategoryResponse;
import com.cntt.billoflading.exception.BadRequestException;
import com.cntt.billoflading.repository.CategoryRepository;
import com.cntt.billoflading.services.CategoryService;
import com.cntt.billoflading.utils.MapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    private final MapperUtils mapperUtils;

    @Override
    public Page<CategoryResponse> getPageCategory(Integer pageNo, Integer pageSize, String keyword) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        return mapperUtils.convertToResponsePage(categoryRepository.searchingKeywordForCategory(keyword, pageable), CategoryResponse.class, pageable);
    }

    @Override
    public CategoryResponse getCategoryById(Long id) {
        return mapperUtils
                .convertToResponse(categoryRepository.findById(id).orElseThrow(() -> new BadRequestException("Không tồn tại danh mục")), CategoryResponse.class);
    }

    @Override
    public CategoryRequest createCategory(CategoryRequest categoryRequest) {
        Category category = mapperUtils.convertToEntity(categoryRequest, Category.class);
        category.setStatus("ENABLE");
        categoryRepository.save(category);
        return categoryRequest;
    }

    @Override
    public CategoryRequest updateCategory(Long id, CategoryRequest categoryRequest) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new BadRequestException("Không tồn tại danh mục"));
        category.setName(categoryRequest.getName());
        categoryRepository.save(category);
        return categoryRequest;
    }

    @Override
    public void deleteById(Long id) {
        categoryRepository.deleteById(id);
    }
}
