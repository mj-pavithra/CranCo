package com.Cranco.Cranco.Notification;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/notifications")

public class NotificationController {

    private final NotificationService notificationService;

    @Autowired
    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping("/{receiverId}")
    public ResponseEntity<List<Notification>> getNotifications(@PathVariable Long receiverId) {
        List<Notification> notifications = notificationService.getNotificationsForUser(receiverId);
        return ResponseEntity.ok(notifications);
    }

    @PostMapping
    public ResponseEntity<Void> createNotification(@RequestBody NotificationDTO notificationDTO) {
        // Convert NotificationDTO to Notification entity and save it
        Notification notification = convertToEntity(notificationDTO);
        notificationService.createNotification(notification);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // Add endpoints for updating/deleting notifications as needed

    private Notification convertToEntity(NotificationDTO notificationDTO) {
        Notification notification = new Notification();
        notification.setMessage(notificationDTO.getMessage());
        notification.setSenderId(notificationDTO.getSenderId());
        notification.setReceiverId(notificationDTO.getReceiverId());
        notification.setTimestamp(notificationDTO.getTimestamp());
        notification.setType(notificationDTO.getType());
        return notification;
    }


    privat Notification void seen{

    }


}
