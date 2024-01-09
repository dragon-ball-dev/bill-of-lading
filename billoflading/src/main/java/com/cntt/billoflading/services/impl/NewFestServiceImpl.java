package com.cntt.billoflading.services.impl;

import com.cntt.billoflading.domain.models.NewFest;
import com.cntt.billoflading.domain.payload.request.NewFestRequest;
import com.cntt.billoflading.domain.payload.response.NewFestResponse;
import com.cntt.billoflading.exception.BadRequestException;
import com.cntt.billoflading.repository.NewFestRepository;
import com.cntt.billoflading.services.BaseService;
import com.cntt.billoflading.services.NewFestService;
import com.cntt.billoflading.utils.MapperUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NewFestServiceImpl extends BaseService implements NewFestService {

    private final NewFestRepository newFestRepository;

    private final MapperUtils mapperUtils;
    @Override
    public Page<NewFestResponse> getAllNewFest(Integer pageNo, Integer pageSize, String keyword) {
        int page = pageNo == 0 ? pageNo : pageNo - 1;
        Pageable pageable = PageRequest.of(page, pageSize);
        return mapperUtils.convertToResponsePage(newFestRepository.searchingNewFeats(keyword,pageable), NewFestResponse.class, pageable);
    }

    @Override
    public NewFestResponse getNewFestById(Long id) {
        return mapperUtils.convertToResponse(newFestRepository.findById(id).orElseThrow(() -> new BadRequestException("Không tồn tại tin tức")), NewFestResponse.class);
    }

    @Override
    public NewFestRequest createNewFest(NewFestRequest newFestRequest) {
        NewFest newFest = mapperUtils.convertToEntity(newFestRequest, NewFest.class);
        newFest.setUserId(getUserId());
        newFestRepository.save(newFest);
        return newFestRequest;
    }

    @Override
    public NewFestRequest updateNewFeat(Long id, NewFestRequest newFestRequest) {
        NewFest newFest = newFestRepository.findById(id).orElseThrow(() -> new BadRequestException("Không tồn tại tin tức");
        newFest.setDescription(newFestRequest.getDescription());
        newFest.setTitle(newFestRequest.getTitle());
        newFest.setImageUrl(newFestRequest.getImageUrl());
        newFestRepository.save(newFest);
        return newFestRequest;
    }

    @Override
    public void deleteNewFestById(Long id) {
        newFestRepository.deleteById(id);
    }
}
