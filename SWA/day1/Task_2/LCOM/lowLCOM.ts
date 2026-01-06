class AuditoriumPrepManager {

  private screenCleaned = false;
  private seatsSanitized = false;
  private soundChecked = false;

  cleanScreen() {
    this.screenCleaned = true;
    console.log("Screen cleaned.");
  }

  sanitizeSeats() {
    this.seatsSanitized = true;
    console.log("Seats sanitized.");
  }

  testSoundSystem() {
    this.soundChecked = true;
    console.log("Sound system tested.");
  }

  printReadiness() {
    console.log("Auditorium Ready?", 
      this.screenCleaned && this.seatsSanitized && this.soundChecked
    );
  }
}

function lowLCOM() {
  const apm = new AuditoriumPrepManager();
  apm.cleanScreen();
  apm.sanitizeSeats();
  apm.testSoundSystem();
  apm.printReadiness();
}

lowLCOM();
