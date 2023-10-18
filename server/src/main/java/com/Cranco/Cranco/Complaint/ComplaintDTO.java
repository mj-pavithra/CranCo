package com.Cranco.Cranco.Complaint;

public class ComplaintDTO {
    private long reportId;
    private long postId;
    private String reason;

    public ComplaintDTO(long reportId, long postId, String reason) {
        this.reportId = reportId;
        this.postId = postId;
        this.reason = reason;
    }
    public long getReportId() { return reportId;}
    public void setReportId(long reportId) {
        this.reportId = reportId;
    }
    public long getPostId() { return postId;}
    public void setPostId(long postId) {
        this.postId = postId;
    }
    public String getReason() { return reason;}
    public void setReason(String reason) {
        this.reason = reason;
    }
}