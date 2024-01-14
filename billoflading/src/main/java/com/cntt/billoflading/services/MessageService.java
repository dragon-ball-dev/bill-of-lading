package com.cntt.billoflading.services;

public interface MessageService {
	
	void Producer(String senderName, String receiverName);
	
	void Consumer(String senderName, String receiverName);
	

}
