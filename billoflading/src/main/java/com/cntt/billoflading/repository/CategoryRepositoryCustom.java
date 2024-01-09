package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CategoryRepositoryCustom {

    Page<Category> searchingKeywordForCategory(String keyword, Pageable pageable);
}
