package com.cntt.billoflading.domain.models;

import com.cntt.billoflading.domain.enums.ServiceDeliver;
import com.cntt.billoflading.domain.models.audit.DateAudit;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "service")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Service extends DateAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Boolean emailVerified = false;

    @Column(nullable = false)
    private ServiceDeliver serviceDeliver;

    @Column(nullable = false)
    private Long price;

    @Column(columnDefinition = "VND")
    private String currency;

    @Column(nullable = false)
    private String unit;

    @Column(nullable = false)
    private Double weight;

    @Column(nullable = false)
    private String estimatedTime ;

}
