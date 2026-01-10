interface PaymentMethod {
  pay(amount: number): void;
}

class CreditCard implements PaymentMethod {
  pay(amount: number) {
    console.log(`Paid ₹${amount} using Credit Card`);
  }
}

class UPI implements PaymentMethod {
  pay(amount: number) {
    console.log(`Paid ₹${amount} using UPI`);
  }
}

class NetBanking implements PaymentMethod {
  pay(amount: number) {
    console.log(`Paid ₹${amount} using NetBanking`);
  }
}

function checkout(method: PaymentMethod) {
  method.pay(499);
}

checkout(new CreditCard());
checkout(new UPI());
checkout(new NetBanking());
            