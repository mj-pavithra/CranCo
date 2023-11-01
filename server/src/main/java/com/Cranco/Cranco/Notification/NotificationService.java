package com.Cranco.Cranco.Notification;


import com.Cranco.Cranco.User.User;
import com.Cranco.Cranco.User.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
@Transactional
public class NotificationService {


    @Autowired
    private  UserService userService;

    @Autowired
    private NotificationRepository notificationRepository;


    @Autowired
    public NotificationService(
            NotificationRepository notificationRepository,
            UserService userService
    ) {
        this.notificationRepository = notificationRepository;
        this.userService = userService;
    }


    public Notification createNotification(User sender, User receiver, String details) {
        Notification notification = new Notification();
        notification.setDate(new Date());
        notification.setDetails(details);
        notification.setSeen(false);
        notification.setClicked(false);

        // Associate the notification with the sender and receiver
        userService.addNotificationToSender(sender, notification);
        userService.addNotificationToReceiver(receiver, notification);

        // Save the notification
        notificationRepository.save(notification);

        // Save the updated sender and receiver
        userService.saveUser(sender);
        userService.saveUser(receiver);

        return notification;
    }

// todo : whole function commented. you can find the reason in notification repository
//    public List<Notification> getUnreadNotifications(User user) {
//        // Fetch and return all unread notifications for the user
//        return notificationRepository.findByReceiverAndSeen(user, false);
//    }

    public void markNotificationAsSeen(Notification notification) {
        // Mark a notification as seen
        notification.setSeen(true);
        notificationRepository.save(notification);
    }

    public void markNotificationAsClicked(Notification notification) {
        // Mark a notification as clicked
        notification.setClicked(true);
        notificationRepository.save(notification);
    }

    public Notification findNotificationById(Long notificationId) {
        return notificationRepository.findById(notificationId).orElse(null);
    }




}

