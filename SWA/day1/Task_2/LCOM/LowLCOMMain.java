class AuditoriumPrepManager {

    private boolean screenCleaned;
    private boolean seatsSanitized;
    private boolean soundChecked;

    public AuditoriumPrepManager() {
        this.screenCleaned = false;
        this.seatsSanitized = false;
        this.soundChecked = false;
    }

    public void cleanScreen() {
        screenCleaned = true;
        System.out.println("Screen cleaned.");
    }

    public void sanitizeSeats() {
        seatsSanitized = true;
        System.out.println("Seats sanitized.");
    }

    public void testSoundSystem() {
        soundChecked = true;
        System.out.println("Sound system tested.");
    }

    public void printReadiness() {
        System.out.println("Auditorium Ready? " +
           (screenCleaned && seatsSanitized && soundChecked));
    }
}

public class LowLCOMMain {
    public static void main(String[] args) {
        AuditoriumPrepManager apm = new AuditoriumPrepManager();
        apm.cleanScreen();
        apm.sanitizeSeats();
        apm.testSoundSystem();
        apm.printReadiness();
    }
}
