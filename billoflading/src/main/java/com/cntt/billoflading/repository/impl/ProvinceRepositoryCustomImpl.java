package com.cntt.billoflading.repository.impl;

import com.cntt.billoflading.domain.models.Category;
import com.cntt.billoflading.domain.models.Province;
import com.cntt.billoflading.repository.BaseRepository;
import com.cntt.billoflading.repository.ProvinceRepositoryCustom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Repository
public class ProvinceRepositoryCustomImpl implements ProvinceRepositoryCustom {
    @PersistenceContext
    private EntityManager em;

    private static final String FROM_PROVINCE = "from bill_of_landing.province p ";
    @Override
    public Page<Province> searchingByProvince(String keyword, Pageable pageable) {
        StringBuilder strQuery = new StringBuilder();
        strQuery.append(FROM_PROVINCE);
        strQuery.append(" where 1=1 ");

        Map<String, Object> params = new HashMap<>();
        if (Objects.nonNull(keyword) && !keyword.isEmpty()) {
            strQuery.append(" AND p.name LIKE :keyword  ");
            params.put("keyword", "%"+keyword+"%");
        }

        String strSelectQuery = "SELECT * " + strQuery;

        String strCountQuery = "SELECT COUNT(DISTINCT p.id)" + strQuery;

        return BaseRepository.getPagedNativeQuery(em,strSelectQuery, strCountQuery, params, pageable, Province.class);
    }
}
