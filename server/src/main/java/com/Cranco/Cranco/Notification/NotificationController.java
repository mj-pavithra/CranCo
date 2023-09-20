package com.Cranco.Cranco.Notification;

import com.Cranco.Cranco.User.User;
import com.Cranco.Cranco.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1/users/notifications")

public class NotificationController {

    private final NotificationService notificationService;

    private final UserService userService;

    @Autowired
    public NotificationController(NotificationService notificationService, UserService userService){ // Add UserService as a parameter
        this.notificationService = notificationService;
        this.userService = userService; // Initialize the userService
    }

    @PostMapping("/create")
    public ResponseEntity<Long> createNotification(
            @RequestParam Long id,
            @RequestParam Date date,
            @RequestParam String details,
            @RequestParam Boolean seen,
            @RequestParam Boolean clicked,
            @RequestParam Long senderId,
            @RequestParam Long receiverId
    ) {

        // Find sender and receiver based on their IDs
        User sender = userService.findUserById(senderId);
        User receiver = userService.findUserById(receiverId);

        if (sender != null && receiver != null) {
            notificationService.createNotification(sender, receiver, notificationDTO.getDetails());
            return new ResponseEntity<>(HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }

    }

    @GetMapping("/unread")
    public ResponseEntity<List<Notification>> getUnreadNotifications(
            @RequestParam Long userId
    ) {
        User user = userService.findUserById(userId);
        if (user != null) {
            List<Notification> unreadNotifications = notificationService.getUnreadNotifications(user);
            return ResponseEntity.ok(unreadNotifications);
//            return ResponseEntity.ok("Okay");
        } else {
            return ResponseEntity.notFound().build();
//            return ResponseEntity.ok("Not Okay");

        }
    }

    @PutMapping("/markAsSeen")
    public ResponseEntity<Void> markNotificationAsSeen(
            @RequestParam Long notificationId
    ) {
        Notification notification = notificationService.findNotificationById(notificationId);
        if (notification != null) {
            notificationService.markNotificationAsSeen(notification);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/markAsClicked")
    public ResponseEntity<Void> markNotificationAsClicked(
            @RequestParam Long notificationId
    ) {
        Notification notification = notificationService.findNotificationById(notificationId);
        if (notification != null) {
            notificationService.markNotificationAsClicked(notification);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
