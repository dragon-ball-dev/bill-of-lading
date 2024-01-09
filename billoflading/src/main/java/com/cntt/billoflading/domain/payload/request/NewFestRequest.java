package com.cntt.billoflading.domain.payload.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class NewFestRequest {
    private String title;

    private String imageUrl;

    private String description;
}
