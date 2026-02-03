interface PaymentMethod {
  pay(amount: number): void;
  refund(amount: number): void;
  setupRecurring(amount: number): void;
}

class UpiPayment implements PaymentMethod {
  pay(amount: number) {
    console.log(`Paid ₹${amount} via UPI`);
  }

  refund(amount: number) {
    console.log(`Refunded ₹${amount} via UPI`);
  }

  setupRecurring(amount: number) {
    throw new Error("UPI does not support recurring payments");
  }
}
