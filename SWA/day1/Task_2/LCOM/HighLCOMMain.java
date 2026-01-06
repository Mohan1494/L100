class LobbyManager {

    // Unrelated fields
    private String popcornMachineStatus;
    private String janitorShiftSchedule;
    private String posterDisplayRotation;

    public LobbyManager(String popcornMachineStatus, String janitorShiftSchedule, String posterDisplayRotation) {
        this.popcornMachineStatus = popcornMachineStatus;
        this.janitorShiftSchedule = janitorShiftSchedule;
        this.posterDisplayRotation = posterDisplayRotation;
    }

    // Uses only popcornMachineStatus
    public void fixPopcornMachine() {
        System.out.println("Fixing popcorn machine: " + popcornMachineStatus);
    }

    // Uses only janitorShiftSchedule
    public void assignJanitor() {
        System.out.println("Assigning janitor: " + janitorShiftSchedule);
    }

    // Uses only posterDisplayRotation
    public void rotateMoviePosters() {
        System.out.println("Rotating movie posters: " + posterDisplayRotation);
    }
}

public class HighLCOMMain {
    public static void main(String[] args) {
        LobbyManager lm = new LobbyManager("Broken Heating Coil", "Morning Shift", "Daily Rotation");
        lm.fixPopcornMachine();
        lm.assignJanitor();
        lm.rotateMoviePosters();
    }
}
