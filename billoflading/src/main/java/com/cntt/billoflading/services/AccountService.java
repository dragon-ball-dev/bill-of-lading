package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.models.User;
import org.springframework.data.domain.Page;

public interface AccountService {
    Page<User> getAllAccount(Integer pageNo, Integer pageSize);
}
