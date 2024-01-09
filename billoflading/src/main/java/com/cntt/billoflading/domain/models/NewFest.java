package com.cntt.billoflading.domain.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "new_fest")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NewFest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "description")
    private String description;
    @Column(name = "user_id")
    private Long userId;
}
