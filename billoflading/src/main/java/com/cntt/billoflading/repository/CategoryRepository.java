package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> , CategoryRepositoryCustom{
}
