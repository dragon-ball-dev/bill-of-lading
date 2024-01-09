package com.cntt.billoflading.repository;



import com.cntt.billoflading.domain.enums.RoleName;
import com.cntt.billoflading.domain.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}