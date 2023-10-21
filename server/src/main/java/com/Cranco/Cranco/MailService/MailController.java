package com.Cranco.Cranco.MailService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MailController {
    private final MailService mailService;


    public MailController(MailService mailService) {
        this.mailService = mailService;
    }

    @GetMapping("/send-email")
    public void sendEmail() {
        mailService.sendEmail("recipient@example.com", "Subject", "Email content");
    }
}
