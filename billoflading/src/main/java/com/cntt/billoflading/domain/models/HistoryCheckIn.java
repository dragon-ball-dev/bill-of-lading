package com.cntt.billoflading.domain.models;

import com.cntt.billoflading.domain.enums.OrderStatus;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "`history_check_in`")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HistoryCheckIn  extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "stock_id", nullable = false)
    private Stock stock;

    @Column(nullable = false)
    private OrderStatus status;
}
