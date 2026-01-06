class Seat {
  info() { console.log("General Seat"); }
}

class StandardSeat extends Seat {
  sit() { console.log("Sitting in Standard Seat"); }
}

export function lownoc() {
  const st = new StandardSeat();
  st.info();
  st.sit();

  console.log("Low NOC = 1 child of Seat");
}

lownoc();
