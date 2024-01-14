package com.cntt.billoflading.repository;



import com.cntt.billoflading.domain.models.MessageChat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageChatRepository extends JpaRepository<MessageChat, Long> {
}
