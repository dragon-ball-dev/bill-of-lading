package com.cntt.billoflading.domain.models;

import com.cntt.billoflading.domain.models.audit.DateAudit;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "district")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class District extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "province_id")
    private Province province;
}
