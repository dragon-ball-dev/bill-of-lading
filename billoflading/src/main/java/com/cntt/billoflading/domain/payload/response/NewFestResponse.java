package com.cntt.billoflading.domain.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class NewFestResponse {
    private Long id;

    private String title;

    private String imageUrl;

    private String description;
}
