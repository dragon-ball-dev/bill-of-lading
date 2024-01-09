package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.NewFest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface NewFestRepositoryCustom {

    Page<NewFest> searchingNewFeats(String keyword, Pageable pageable);
}
