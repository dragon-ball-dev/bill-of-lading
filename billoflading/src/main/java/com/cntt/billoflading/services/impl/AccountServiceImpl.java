package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.models.User;
import com.cntt.billoflading.repository.RoleRepository;
import com.cntt.billoflading.repository.UserRepository;
import com.cntt.billoflading.services.AccountService;
import com.cntt.billoflading.utils.MapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final UserRepository userRepository;
    private final MapperUtils mapperUtils;
    private final JavaMailSender mailSender;
    private final RoleRepository roleRepository;


    @Override
    public Page<User> getAllAccount(Integer pageNo, Integer pageSize) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        return userRepository.searchingAccount(pageable);
    }
}
