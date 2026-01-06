class SimpleAlarm {
    void ringAlarm() { System.out.println("Alarm ringing..."); }
}

class DoorSensor {
    void detectOpen() { System.out.println("Door opened detected."); }
}

// LOW RFC class
class SimpleEmergencyNotifier {
    private SimpleAlarm alarm = new SimpleAlarm();
    private DoorSensor sensor = new DoorSensor();

    public void triggerAlert() {
        sensor.detectOpen();
        alarm.ringAlarm();
    }
}

public class LowRFCMain {
    public static void main(String[] args) {
        SimpleEmergencyNotifier notifier = new SimpleEmergencyNotifier();
        notifier.triggerAlert();
    }
}
