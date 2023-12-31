package com.Cranco.Cranco.Complaint;

import com.Cranco.Cranco.Post.Post;
import com.Cranco.Cranco.Post.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintService {

    private final ComplaintRepository complaintRepository;

    @Autowired
    public ComplaintService(ComplaintRepository complaintRepository) {
        this.complaintRepository = complaintRepository;
    }

    public Complaint complaintPost(ComplaintDTO complaintDTO){
        Complaint complaint = new Complaint();
        complaint.setPostId(complaintDTO.getPostId());
        complaint.setReason(complaintDTO.getReason());
        return complaintRepository.save(complaint);
    }

    public List<Complaint> getAllReportsForPost(long postId) {
        return complaintRepository.findByPostId(postId);
    }

    public List<Complaint> getAllComplaintsSortedByPostId() {
        return complaintRepository.findAllByOrderByPostIdASC();
    }

    public void deleteComplaint(Long reportId) {
        complaintRepository.deleteById(reportId);
    }

    public long getComplaintCount() {
        return complaintRepository.getComplaintCount();
    }

    public List<Complaint> searchComplaints(long reason) {
        return complaintRepository.searchComplaints(reason);
    }

//    public List<Complaint> searchComplaints(String search) {
//        return complaintRepository.searchComplaints(search);
//    }

//    public long countComplaintsByreportId(String reportId) {
//        return complaintRepository.countComplaintsByreportId(reportId);
//    }
}

