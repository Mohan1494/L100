interface Payable {
  pay(amount: number): void;
}

interface Refundable {
  refund(amount: number): void;
}

interface RecurringPayable {
  setupRecurring(amount: number): void;
}

class UpiPayment1 implements Payable, Refundable {
  pay(amount: number) {
    console.log(`Paid ₹${amount} via UPI`);
  }

  refund(amount: number) {
    console.log(`Refunded ₹${amount} via UPI`);
  }
}

class CreditCardPayment implements Payable, Refundable, RecurringPayable {
  pay(amount: number) {
    console.log(`Paid ₹${amount} via Credit Card`);
  }

  refund(amount: number) {
    console.log(`Refunded ₹${amount} to Credit Card`);
  }

  setupRecurring(amount: number) {
    console.log(`Recurring payment of ₹${amount} set up`);
  }
}
