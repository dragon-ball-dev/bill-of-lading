package com.cntt.billoflading.services;





import com.cntt.billoflading.domain.models.Message;
import com.cntt.billoflading.domain.models.MessageChat;
import com.cntt.billoflading.domain.models.User;
import com.cntt.billoflading.domain.payload.DTO.MessageDTO;

import java.util.List;

public interface UserService {

	String updateImageUser(Long id, String image);

	String updateUser(User user);

	List<MessageDTO> getMessageUser();

	MessageDTO toMessageDTO(User user, Message message);

	List<User> findMessageUser(String userName);

	Message getMessageChatUser(Long userId, Long guestId);

	String addChatUser(Long id, Long userId, MessageChat messageChat);
}
