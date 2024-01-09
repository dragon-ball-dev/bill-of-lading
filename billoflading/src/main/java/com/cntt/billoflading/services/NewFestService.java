package com.cntt.billoflading.services;

import com.cntt.billoflading.domain.payload.request.NewFestRequest;
import com.cntt.billoflading.domain.payload.response.NewFestResponse;
import org.springframework.data.domain.Page;

public interface NewFestService {
    Page<NewFestResponse> getAllNewFest(Integer pageNo, Integer pageSize, String keyword);

    NewFestResponse getNewFestById(Long id);

    NewFestRequest createNewFest(NewFestRequest newFestRequest);

    NewFestRequest updateNewFeat(Long id, NewFestRequest newFestRequest);

    void deleteNewFestById(Long id);
}
