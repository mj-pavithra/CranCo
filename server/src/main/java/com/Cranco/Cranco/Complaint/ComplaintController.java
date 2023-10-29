package com.Cranco.Cranco.Complaint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth/complaints")
public class ComplaintController {

    private final ComplaintService complaintService;

    @Autowired
    public ComplaintController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }

    // GET test endpoint
//    @GetMapping("/test")
//    public ResponseEntity<String> test() {
//        return ResponseEntity.ok("Test successful");
//    }

    @PostMapping("/")
    public ResponseEntity<Complaint> complaintPost(@RequestBody ComplaintDTO complaintDTO) {
        try {
            Complaint complaint = complaintService.complaintPost(complaintDTO);
            return ResponseEntity.ok(complaint);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{postId}")
    public ResponseEntity<List<Complaint>> getAllReportsForPost(@PathVariable long postId) {
        try {
            List<Complaint> complaintList = complaintService.getAllReportsForPost(postId);
            return ResponseEntity.ok(complaintList);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Complaint>> getAllComplaintsSortedByPostId() {
        try {
            List<Complaint> complaintList = complaintService.getAllComplaintsSortedByPostId();
            return ResponseEntity.ok(complaintList);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{reportId}")
    public ResponseEntity<Complaint> deleteComplaint(@PathVariable long reportId) {
        try {
            complaintService.deleteComplaint(reportId);
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
