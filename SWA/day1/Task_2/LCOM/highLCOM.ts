class LobbyManager {

  constructor(
    private popcornMachineStatus: string,
    private janitorShiftSchedule: string,
    private posterDisplayRotation: string
  ) {}

  fixPopcornMachine() {
    console.log("Fixing popcorn machine:", this.popcornMachineStatus);
  }

  assignJanitor() {
    console.log("Assigning janitor:", this.janitorShiftSchedule);
  }

  rotateMoviePosters() {
    console.log("Rotating movie posters:", this.posterDisplayRotation);
  }
}

function highLCOM() {
  const lm = new LobbyManager("No Oil", "Night Shift", "Weekly Rotation");
  lm.fixPopcornMachine();
  lm.assignJanitor();
  lm.rotateMoviePosters();
}

highLCOM();
