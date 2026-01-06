class Projector {
    void stopMovie() { System.out.println("Projector: Movie stopped."); }
}

class AuditoriumLights {
    void turnOnFull() { System.out.println("Lights: Full brightness."); }
}

class SoundSystem {
    void playEmergencyMessage() { System.out.println("SoundSystem: Emergency message playing."); }
}

class ExitDoors {
    void unlockAll() { System.out.println("Exit doors unlocked."); }
}

class LocalPoliceAPI {
    void dispatchAlert() { System.out.println("Police alerted."); }
}

// HIGH RFC class
class EmergencyProtocol {
    private Projector projector = new Projector();
    private AuditoriumLights lights = new AuditoriumLights();
    private SoundSystem sound = new SoundSystem();
    private ExitDoors doors = new ExitDoors();
    private LocalPoliceAPI police = new LocalPoliceAPI();

    public void triggerEvacuation() {
        projector.stopMovie();
        lights.turnOnFull();
        sound.playEmergencyMessage();
        doors.unlockAll();
        police.dispatchAlert();
    }
}

public class HighRFCMain {
    public static void main(String[] args) {
        EmergencyProtocol protocol = new EmergencyProtocol();
        protocol.triggerEvacuation();
    }
}
