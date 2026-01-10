// Parent Class
class BankTransaction {
  constructor(public transactionID: string, public amount: number) {}
}

// Subclass A
class Deposit extends BankTransaction {
  constructor(transactionID: string, amount: number, public sourceBankName: string) {
    super(transactionID, amount);
  }
}

// Subclass B
class Withdrawal extends BankTransaction {
  constructor(transactionID: string, amount: number, public atmLocation: string) {
    super(transactionID, amount);
  }
}

// Subclass C
class Transfer extends BankTransaction {
  constructor(transactionID: string, amount: number, public receiverAccountNumber: string) {
    super(transactionID, amount);
  }
}

const dep = new Deposit("TXN1001", 5000, "HDFC Bank");
const wd = new Withdrawal("TXN1002", 2000, "ATM - Chennai");
const trans = new Transfer("TXN1003", 7000, "ACC998877");

console.log(dep.sourceBankName);
console.log(wd.atmLocation);
console.log(trans.receiverAccountNumber);
