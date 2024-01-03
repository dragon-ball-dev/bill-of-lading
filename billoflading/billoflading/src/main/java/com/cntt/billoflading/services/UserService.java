package com.cntt.billoflading.services;




import com.cntt.billoflading.domain.models.User;

import java.util.List;

public interface UserService {

	String updateImageUser(Long id, String image);

	String updateUser(User user);


}
