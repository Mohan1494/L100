class SimpleAlarm {
  ringAlarm() { console.log("Alarm ringing..."); }
}

class DoorSensor {
  detectOpen() { console.log("Door opened"); }
}

class SimpleEmergencyNotifier {
  alarm = new SimpleAlarm();
  sensor = new DoorSensor();

  triggerAlert() {
    this.sensor.detectOpen();
    this.alarm.ringAlarm();
  }
}

function lowRFC() {
  const notifier = new SimpleEmergencyNotifier();
  notifier.triggerAlert();
}

lowRFC();
