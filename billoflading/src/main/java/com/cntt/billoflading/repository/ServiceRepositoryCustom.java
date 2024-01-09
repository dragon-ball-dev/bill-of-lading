package com.cntt.billoflading.repository;

public interface ServiceRepositoryCustom {
    Double calculateFee(Long serviceId,Double weight);
}
