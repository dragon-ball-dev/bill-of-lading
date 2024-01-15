package com.cntt.billoflading.repository;



import com.cntt.billoflading.domain.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserRepositoryCustom {
    Page<User> searchingAccount(String keyword, Pageable pageable);

    Page<User> searchingAccount( Pageable pageable);

    void deleteRoleOfAccount(Long id);
}
