package com.cntt.billoflading.repository.impl;

import com.cntt.billoflading.domain.models.Banner;
import com.cntt.billoflading.repository.BannerRepositoryCustom;
import com.cntt.billoflading.repository.BaseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Service
public class BannerRepositoryCustomImpl implements BannerRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

    private static final String FROM_BANNER = "from bill_of_landing.banner b ";

    @Override
    public Page<Banner> searchingBanner(String keyword, Pageable pageable) {
        StringBuilder strQuery = new StringBuilder();
        strQuery.append(FROM_BANNER);
        strQuery.append(" where 1=1 ");

        Map<String, Object> params = new HashMap<>();
        if (Objects.nonNull(keyword) && !keyword.isEmpty()) {
            strQuery.append(" AND b.name LIKE :keyword  ");
            params.put("keyword", "%"+keyword+"%");
        }

        String strSelectQuery = "SELECT * " + strQuery;

        String strCountQuery = "SELECT COUNT(DISTINCT b.id)" + strQuery;

        return BaseRepository.getPagedNativeQuery(em,strSelectQuery, strCountQuery, params, pageable, Banner.class);
    }
}
