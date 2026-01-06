class Seat {
  showType() { console.log("General Seat"); }
}

class StandardSeat extends Seat {
  sit() { console.log("Sitting in a Standard Seat"); }
}

export function lowdit() {
  const st = new StandardSeat();
  st.showType();
  st.sit();

  console.log("Low DIT = 1 (Seat → StandardSeat)");
}

lowdit();
