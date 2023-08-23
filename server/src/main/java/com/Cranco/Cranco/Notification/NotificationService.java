package com.Cranco.Cranco.Notification;


import java.util.List;

public class NotificationService {

    private final NotificationRepository notificationRepository;


    public NotificationService(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    public List<Notification> getNotificationsForUser(Long receiverId) {
        return notificationRepository.findByReceiverIdOrderByTimestampDesc(receiverId);
    }

    public void createNotification(Notification notification) {
        notificationRepository.save(notification);
    }

    // Other methods for updating/deleting notifications
}

