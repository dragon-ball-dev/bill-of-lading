package com.cntt.billoflading.services;



import com.cntt.billoflading.domain.models.User;
import com.cntt.billoflading.domain.payload.request.*;
import com.cntt.billoflading.domain.payload.response.MessageResponse;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import java.io.IOException;
import java.net.URI;

public interface AuthService {
    URI registerAccount(SignUpRequest signUpRequest) throws MessagingException, IOException;

    String login(LoginRequest loginRequest);

    MessageResponse forgotPassword(EmailRequest emailRequest) throws MessagingException, IOException;

    MessageResponse resetPassword(ResetPasswordRequest resetPasswordRequest);

    MessageResponse confirmedAccount(EmailRequest emailRequest);

    MessageResponse changePassword(ChangePasswordRequest changePasswordRequest);

    MessageResponse changeImage(MultipartFile file);

    MessageResponse lockAccount(Long id);

    MessageResponse uploadProfile(MultipartFile file, String zalo, String facebook, String address);

    Page<User> getAllAccount(String keyword, Integer pageNo, Integer pageSize);
}
