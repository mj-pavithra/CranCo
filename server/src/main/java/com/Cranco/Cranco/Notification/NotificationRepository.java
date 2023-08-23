package com.Cranco.Cranco.Notification;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

    List<Notification> findByReceiverIdOrderByTimestampDesc(Long receiverId);

    default void save(Notification notification) {

    }
}
