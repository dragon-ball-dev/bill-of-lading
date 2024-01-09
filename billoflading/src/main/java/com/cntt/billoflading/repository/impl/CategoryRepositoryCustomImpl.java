package com.cntt.billoflading.repository.impl;

import com.cntt.billoflading.domain.models.Category;
import com.cntt.billoflading.domain.models.User;
import com.cntt.billoflading.repository.BaseRepository;
import com.cntt.billoflading.repository.CategoryRepositoryCustom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Repository
public class CategoryRepositoryCustomImpl implements CategoryRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

    private static final String FROM_CATEGORY = "from bill_of_landing.category c ";
    @Override
    public Page<Category> searchingKeywordForCategory(String keyword, Pageable pageable) {
        StringBuilder strQuery = new StringBuilder();
        strQuery.append(FROM_CATEGORY);
        strQuery.append(" where 1=1 ");

        Map<String, Object> params = new HashMap<>();
        if (Objects.nonNull(keyword) && !keyword.isEmpty()) {
            strQuery.append(" AND c.name LIKE :keyword  ");
            params.put("keyword", "%"+keyword+"%");
        }

        String strSelectQuery = "SELECT * " + strQuery;

        String strCountQuery = "SELECT COUNT(DISTINCT c.id)" + strQuery;

        return BaseRepository.getPagedNativeQuery(em,strSelectQuery, strCountQuery, params, pageable, Category.class);
    }
}
