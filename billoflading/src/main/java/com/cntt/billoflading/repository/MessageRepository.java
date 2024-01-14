package com.cntt.billoflading.repository;



import com.cntt.billoflading.domain.models.Message;
import com.cntt.billoflading.domain.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    Message findBySenderAndReceiver(User sender, User receiver);

    List<Message> findBySender(User sender);

    List<Message> findByReceiver(User receiver);

}
