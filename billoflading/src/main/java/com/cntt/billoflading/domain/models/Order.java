package com.cntt.billoflading.domain.models;

import com.cntt.billoflading.domain.enums.OrderStatus;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "`order`")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "delivery_fee",nullable = false)
    private Long delivery_fee;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "service_transportation_id", nullable = false)
    private ServiceTransportation serviceTransportation;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false)
    private String country;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Receiver_province_id", nullable = false)
    private Province Receiver_province;

    @Column(name = "receiver_info",nullable = false)
    private String receiver_info;

    @Column(name = "sender_info",nullable = false)
    private String sender_info;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sender_province_id", nullable = false)
    private Province sender_province;

    @Column(nullable = false)
    private Long weight;

    @Column(nullable = false)
    private Long cod;

    @Column(nullable = false)
    private OrderStatus status;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "check_in", joinColumns = @JoinColumn(name = "stock_id"), inverseJoinColumns = @JoinColumn(name = "order_id"))
    private Set<Stock> stock = new HashSet<>();
}
