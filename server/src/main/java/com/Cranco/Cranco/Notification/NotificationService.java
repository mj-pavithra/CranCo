package com.Cranco.Cranco.Notification;


import com.Cranco.Cranco.User.UserRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private ModelMapper modelMapper;

    public NotificationService(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    public List<NotificationDTO> getnotifications() {
        List<Notification>notificationList = notificationRepository.findAll();
        return modelMapper.map(notificationList, new TypeToken<List<NotificationDTO>>(){}.getType());
    }

}

