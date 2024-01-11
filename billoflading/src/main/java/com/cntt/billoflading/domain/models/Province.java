package com.cntt.billoflading.domain.models;

import com.cntt.billoflading.domain.enums.TypeProvince;
import com.cntt.billoflading.domain.models.audit.DateAudit;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "province")
@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class Province extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private TypeProvince type;
}
