class Seat {
  showType() { console.log("General Seat"); }
}

class PremiumSeat extends Seat {
  comfort() { console.log("Premium comfort added"); }
}

class BoxSuite extends PremiumSeat {
  privateRoom() { console.log("Private Box Suite experience"); }
}

class PrivateBalcony extends BoxSuite {
  balconyView() { console.log("Enjoying private balcony view!"); }
}

export function highdit() {
  const pb = new PrivateBalcony();
  pb.showType();
  pb.comfort();
  pb.privateRoom();
  pb.balconyView();

  console.log("High DIT = 4 (Seat → PremiumSeat → BoxSuite → PrivateBalcony)");
}

highdit();
