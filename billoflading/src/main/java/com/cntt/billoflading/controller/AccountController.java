package com.cntt.billoflading.controller;

import com.cntt.billoflading.services.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;

@RestController
@RequestMapping("/account")
@RequiredArgsConstructor
public class AccountController {
    private final AccountService accountService;


    @GetMapping("/employees")
    private ResponseEntity<?> getAllAccountOfRental(@RequestParam Integer pageNo,
                                                    @RequestParam Integer pageSize) {
        return ResponseEntity.ok(accountService.getAllAccount(pageNo,pageSize));
    }


//    @PostMapping("/{id}/authorization")
//    private ResponseEntity<?> divideAuthorization(@PathVariable Long id, @RequestBody RoleRequest roleRequest) {
//        return ResponseEntity.ok(accountService.divideAuthorization(id, roleRequest));
//    }
}
