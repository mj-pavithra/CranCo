package com.Cranco.Cranco.Complaint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComplaintService {

    private ComplaintRepository complaintRepository;

    @Autowired
    public ComplaintService(ComplaintRepository complaintRepository) {
        this.complaintRepository = complaintRepository;
    }

    public Complaint createComplaint(ComplaintDTO complaintDTO) {
        Complaint complaint = new Complaint();
        complaint.settitle(complaintDTO.gettitle());
        complaint.setdescription(complaintDTO.getdescription());
        complaint.setIsClosed(true);
        complaint.setIsReviewed(false);
        return complaintRepository.save(complaint);
    }

    public Complaint updateComplaint(Long id, ComplaintDTO complaintDTO) {
        Complaint complaint = complaintRepository.findById(id).orElse(null);
        if (complaint != null) {
            complaint.settitle(complaintDTO.gettitle());
            complaint.setdescription(complaintDTO.getdescription());
            return complaintRepository.save(complaint);
        }
        return null;
    }

    public void reviewComplaint(Long id) {
        Complaint complaint = complaintRepository.findById(id).orElse(null);
        if (complaint != null) {
            complaint.setIsReviewed(true);
            complaintRepository.save(complaint);
        }
    }

    public void closeComplaint(Long id) {
        Complaint complaint = complaintRepository.findById(id).orElse(null);
        if (complaint != null && complaint.isReviewed()) {
            complaint.setIsClosed(false);
            complaintRepository.save(complaint);
        }
    }

    public void deleteComplaint(Long id) {
        complaintRepository.deleteById(id);
    }
}

//    public List<Complaint> getAllComplaints() {
//        return (List<Complaint>) complaintRepository.findAll();
//    }

//    public ComplaintDTO maptoDTO(Complaint complaint) {
//        ComplaintDTO dto = new ComplaintDTO();
//        dto.setComplaint_id(complaint.getComplaint_id());
//        dto.setComplaint_title(complaint.getComplaint_title());
//        dto.setComplaint_description(complaint.getComplaint_description());
//        dto.setIsClosed(complaint.isClosed());
//        dto.setIsReviewed(complaint.isReviewed());
//        return dto;
//    }


//
//    public List<Complaint> getReviewedComplaints() {
//        return complaintRepository.findByIsReviewed(true);
//    }
//
//    public List<Complaint> getClosedComplaints() {
//        return complaintRepository.findByIsOpen(false);
//    }
//
//    public Complaint getComplaintById(Long complaintId) {
//        return complaintRepository.findById(complaintId).orElse(null);
//    }

