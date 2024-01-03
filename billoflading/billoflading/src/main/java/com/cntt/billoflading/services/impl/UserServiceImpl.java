package com.cntt.billoflading.services.impl;



import com.cntt.billoflading.domain.models.User;
import com.cntt.billoflading.exception.ResourceNotFoundException;
import com.cntt.billoflading.repository.UserRepository;
import com.cntt.billoflading.services.BaseService;
import com.cntt.billoflading.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends BaseService implements UserService {
	
	@Autowired
	UserRepository userRepository;

	@Autowired
	FileStorageServiceImpl fileStorageServiceImpl;

	@Override
	public String updateImageUser(Long id, String image) {
		try {
			User user = userRepository.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
			user.setImageUrl(image);
			userRepository.save(user);
			
			return "Cập nhật hình ảnh thành công!!!";
		} catch (Exception e) {
			return "Cập nhật hình ảnh thất bại!!!";
		}
	}
	
	@Override
	public String updateUser(User user) {
		try {
			User userCore = userRepository.findById(user.getId()).get();
			if (user.getAddress() != null) userCore.setAddress(user.getAddress());
			if (user.getName() != null) userCore.setName(user.getName());
			if (user.getPhone() != null) userCore.setPhone(user.getPhone());
			userRepository.save(userCore);
			return "Cập nhật thông tin thành công!!!";
		} catch (Exception e) {
			return "Cập nhật thông tin thất bại!!!";
		}
	}
	

}
