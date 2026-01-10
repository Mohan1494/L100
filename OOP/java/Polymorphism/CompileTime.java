package Polymorphism;
class EmailService {

    // Send with basic info
    void sendEmail(String recipient, String message) {
        System.out.println("Sending email to " + recipient + " with message: " + message);
    }

    // Send with attachment
    void sendEmail(String recipient, String message, String attachment) {
        System.out.println("Sending email with attachment (" + attachment + ")");
    }

    // Send with CC/BCC
    void sendEmail(String recipient, String message, String cc, String bcc) {
        System.out.println("Sending email with CC: " + cc + " and BCC: " + bcc);
    }
}

public class CompileTime {
    public static void main(String[] args) {

        EmailService service = new EmailService();

        service.sendEmail("john@example.com", "Hello!");
        service.sendEmail("jane@example.com", "Report attached", "report.pdf");
        service.sendEmail("team@example.com", "Meeting Update", "manager@example.com", "hr@example.com");
    }
}
