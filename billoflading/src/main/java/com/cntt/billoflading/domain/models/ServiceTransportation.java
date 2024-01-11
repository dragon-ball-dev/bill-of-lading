package com.cntt.billoflading.domain.models;

import com.cntt.billoflading.domain.enums.ServiceDeliver;
import com.cntt.billoflading.domain.enums.ServiceScope;
import com.cntt.billoflading.domain.enums.WeightService;
import com.cntt.billoflading.domain.enums.WeightUnit;
import com.cntt.billoflading.domain.models.audit.DateAudit;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Table(name = "service_transportation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceTransportation extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "service_deliver",nullable = false)
    private ServiceDeliver serviceDeliver;

    @Column(name = "service_scope",nullable = false)
    private ServiceScope serviceScope;

    @Column(nullable = false)
    private Long price;

    @ColumnDefault(value = "'VND'")
    private String currency;

    @Column(nullable = false)
    private WeightUnit unit;

    @Column(nullable = false)
    private WeightService weightService;

    @Column(name = "estimated_time",nullable = false)
    private String estimatedTime ;

}
