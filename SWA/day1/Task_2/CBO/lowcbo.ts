class SimplePayment {
  pay() { console.log("Simple payment done."); }
}

class SnackCounter {
  payment = new SimplePayment();

  buySnack() {
    this.payment.pay();
    console.log("Snack purchased.");
  }
}

export function lowcbo() {
  const counter = new SnackCounter();
  counter.buySnack();
  console.log("Low CBO = 1 dependency");
}

lowcbo();
