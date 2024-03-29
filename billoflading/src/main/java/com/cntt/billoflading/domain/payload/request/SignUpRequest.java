package com.cntt.billoflading.domain.payload.request;


import com.cntt.billoflading.domain.enums.RoleName;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class SignUpRequest {
    @NotBlank
    private String name;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

    private String phone;

    private String address;

    private String confirmPassword;

    private RoleName role;

    private Integer storeId;
}