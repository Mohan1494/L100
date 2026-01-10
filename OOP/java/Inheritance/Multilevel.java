package Inheritance;
// Grandparent Class
class Aircraft {
    int altitude;
    int velocity;
    boolean engineStatus;

    void takeOff() {
        engineStatus = true;
        System.out.println("Aircraft taking off...");
    }
}

// Parent Class
class CommercialJet extends Aircraft {
    int passengerCapacity;
    double cabinPressure;

    void enableAutoPilot() {
        System.out.println("Autopilot enabled.");
    }
}

// Child Class
class Boeing747 extends CommercialJet {
    double wingSpan;
    String autopilotVersion;

    void displaySpecs() {
        System.out.println("Boeing747 WingSpan: " + wingSpan);
        System.out.println("Autopilot Version: " + autopilotVersion);
    }
}

public class Multilevel {
    public static void main(String[] args) {
        Boeing747 jet = new Boeing747();
        jet.wingSpan = 68.5;
        jet.autopilotVersion = "v3.2";
        jet.takeOff();
        jet.enableAutoPilot();
        jet.displaySpecs();
    }
}
