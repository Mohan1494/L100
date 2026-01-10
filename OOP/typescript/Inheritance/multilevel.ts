// Grandparent Class
class Aircraft {
  altitude!: number;
  velocity!: number;
  engineStatus!: boolean;

  takeOff() {
    this.engineStatus = true;
    console.log("Aircraft taking off...");
  }
}

// Parent Class
class CommercialJet extends Aircraft {
  passengerCapacity!: number;
  cabinPressure!: number;

  enableAutoPilot() {
    console.log("Autopilot enabled.");
  }
}

// Child Class
class Boeing747 extends CommercialJet {
  wingSpan!: number;
  autopilotVersion!: string;

  displaySpecs() {
    console.log(`WingSpan: ${this.wingSpan}`);
    console.log(`Autopilot Version: ${this.autopilotVersion}`);
  }
}

const jet = new Boeing747();
jet.wingSpan = 68.5;
jet.autopilotVersion = "v3.2";
jet.takeOff();
jet.enableAutoPilot();
jet.displaySpecs();
