package Inheritance;
// Parent Class
class BankTransaction {
    String transactionID;
    double amount;

    BankTransaction(String transactionID, double amount) {
        this.transactionID = transactionID;
        this.amount = amount;
    }
}

// Subclass A
class Deposit extends BankTransaction {
    String sourceBankName;

    Deposit(String transactionID, double amount, String sourceBankName) {
        super(transactionID, amount);
        this.sourceBankName = sourceBankName;
    }
}

// Subclass B
class Withdrawal extends BankTransaction {
    String atmLocation;

    Withdrawal(String transactionID, double amount, String atmLocation) {
        super(transactionID, amount);
        this.atmLocation = atmLocation;
    }
}

// Subclass C
class Transfer extends BankTransaction {
    String receiverAccountNumber;

    Transfer(String transactionID, double amount, String receiverAccountNumber) {
        super(transactionID, amount);
        this.receiverAccountNumber = receiverAccountNumber;
    }
}

public class Hierarchial {
    public static void main(String[] args) {
        Deposit d = new Deposit("TXN1001", 5000, "HDFC Bank");
        Withdrawal w = new Withdrawal("TXN1002", 2000, "ATM - Chennai");
        Transfer t = new Transfer("TXN1003", 7000, "ACC998877");
        
        System.out.println("Deposit from: " + d.sourceBankName);
        System.out.println("Withdrawal at: " + w.atmLocation);
        System.out.println("Transfer to: " + t.receiverAccountNumber);
    }
}
