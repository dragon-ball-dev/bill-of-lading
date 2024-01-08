package com.cntt.billoflading.domain.models;

import com.cntt.billoflading.domain.enums.OrderStatus;
import com.cntt.billoflading.domain.models.audit.DateAudit;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "order")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order extends DateAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user_id;

    @Column(nullable = false)
    private Long delivery_fee;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "service_transportation _id", nullable = false)
    private ServiceTransportation ServiceTransportation_Id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category_id;

    @Column(nullable = false)
    private String country;

    @Column(nullable = false)
    private String receiver_info;

    @Column(nullable = false)
    private String sender_info;

    @Column(nullable = false)
    private Double weight;

    @Column(nullable = false)
    private Double cod;

    @Column(nullable = false)
    private OrderStatus status;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "check_in", joinColumns = @JoinColumn(name = "stock_id"), inverseJoinColumns = @JoinColumn(name = "order_id"))
    private Set<Stock> stock = new HashSet<>();
}
