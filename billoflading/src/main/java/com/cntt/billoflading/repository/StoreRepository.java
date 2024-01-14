package com.cntt.billoflading.repository;


import com.cntt.billoflading.domain.models.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreRepository extends JpaRepository<Store, Integer> {
    Store findByName(String name);
}
