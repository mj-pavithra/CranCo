package com.Cranco.Cranco.Complaint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/Complaints")
public class ComplaintController {

    private final ComplaintService complaintService;

    @Autowired
    public ComplaintController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }

    @PostMapping("/complaint")
    public ResponseEntity<Complaint> createComplaint(@RequestBody ComplaintDTO complaintDTO) {
        try {
                Complaint complaint = complaintService.createComplaint(complaintDTO);
                return ResponseEntity.ok(complaint);
        } catch (Exception ex) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/{id}")
    public ResponseEntity<Complaint> updateComplaint(@PathVariable long id, @RequestBody ComplaintDTO complaintDTO) {
        try{
                Complaint complaint = complaintService.updateComplaint(id, complaintDTO);
                if (complaint != null) {
                    return ResponseEntity.ok(complaint);
                }
                return ResponseEntity.notFound().build();
        } catch (Exception ex) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/{id}/review")
    public ResponseEntity<Complaint> reviewComplaint(@PathVariable long id) {
        try {
            complaintService.reviewComplaint(id);
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/{id}/close")
    public ResponseEntity<Complaint> closeComplaint(@PathVariable long id) {
        try {
            complaintService.closeComplaint(id);
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Complaint> deleteComplaint(@PathVariable long id) {
        try {
            complaintService.deleteComplaint(id);
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

//    @GetMapping("/all")
//    public ResponseEntity<List<Complaint>> getAllComplaints() {
//        try {
//            List<Complaint> complaintList = complaintService.getAllComplaints();
//            return ResponseEntity.ok(complaintList);
//        } catch (Exception ex) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }
}
