class Projector {
  stopMovie() { console.log("Projector stopped"); }
}

class AuditoriumLights {
  turnOnFull() { console.log("Lights at full brightness"); }
}

class SoundSystem {
  playEmergencyMessage() { console.log("Emergency message playing"); }
}

class ExitDoors {
  unlockAll() { console.log("Exit doors unlocked"); }
}

class LocalPoliceAPI {
  dispatchAlert() { console.log("Police alerted"); }
}

class EmergencyProtocol {
  projector = new Projector();
  lights = new AuditoriumLights();
  sound = new SoundSystem();
  doors = new ExitDoors();
  police = new LocalPoliceAPI();

  triggerEvacuation() {
    this.projector.stopMovie();
    this.lights.turnOnFull();
    this.sound.playEmergencyMessage();
    this.doors.unlockAll();
    this.police.dispatchAlert();
  }
}

function highRFC() {
  const protocol = new EmergencyProtocol();
  protocol.triggerEvacuation();
}

highRFC();
