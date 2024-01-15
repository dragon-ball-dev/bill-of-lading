package com.cntt.billoflading.repository.impl;

import com.cntt.billoflading.domain.models.Category;
import com.cntt.billoflading.domain.models.NewFest;
import com.cntt.billoflading.repository.BaseRepository;
import com.cntt.billoflading.repository.NewFestRepositoryCustom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Repository
public class NewFestRepositoryCustomImpl implements NewFestRepositoryCustom {
    @PersistenceContext
    private EntityManager em;

    private static final String FROM_NEW_FETS = "from bill_of_landing.new_fest n ";
    @Override
    public Page<NewFest> searchingNewFeats(String keyword, Pageable pageable) {
        StringBuilder strQuery = new StringBuilder();
        strQuery.append(FROM_NEW_FETS);
        strQuery.append(" where 1=1 ");

        Map<String, Object> params = new HashMap<>();
        if (Objects.nonNull(keyword) && !keyword.isEmpty()) {
            strQuery.append(" AND n.title LIKE :keyword  ");
            params.put("keyword", "%"+keyword+"%");
        }

        String strSelectQuery = "SELECT * " + strQuery;

        String strCountQuery = "SELECT COUNT(DISTINCT n.id)" + strQuery;

        return BaseRepository.getPagedNativeQuery(em,strSelectQuery, strCountQuery, params, pageable, NewFest.class);
    }
}
