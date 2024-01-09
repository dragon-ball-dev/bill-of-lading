package com.cntt.billoflading.repository;

import com.cntt.billoflading.domain.models.NewFest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewFestRepository extends JpaRepository<NewFest, Long> {

}
