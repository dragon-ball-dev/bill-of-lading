package com.cntt.billoflading.domain.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "banner")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Banner {
    private Long id;
    private String name;

    @Column(name = "image_url")
    private String imageUrl;
    private Double width;
    private Double height;
    private Long userId;
}
