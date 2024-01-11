package com.cntt.billoflading.controller;

import com.cntt.billoflading.services.DistrictService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/district")
@RequiredArgsConstructor
public class DistrictController {

    private final DistrictService districtService;
}
