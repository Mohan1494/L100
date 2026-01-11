class Teller {
    // Responsibility: Handle physical cash deposits
    public void depositCash(double amount, BankLedger ledger) {
        System.out.println("Teller: Safely counting $" + amount + "...");
        ledger.record("Cash Deposit: $" + amount);
    }
}

class LoanOfficer {
    // Responsibility: Handle loan evaluation
    public boolean evaluateMortgage(int creditScore, double income) {
        System.out.println("Loan Dept: Running credit risk algorithms...");
        return creditScore > 700 && income > 50000;
    }
}

class BankLedger {
    // Responsibility: Store ledger entries
    public void record(String message) {
        System.out.println("Ledger: Entry saved -> " + message);
    }
}

public class BankSystem {
    public static void main(String[] args) {
        BankLedger ledger = new BankLedger();
        Teller teller = new Teller();
        LoanOfficer loanOfficer = new LoanOfficer();

        teller.depositCash(500, ledger);

        boolean result = loanOfficer.evaluateMortgage(750, 60000);
        System.out.println("Mortgage Result: " + (result ? "Approved" : "Denied"));
    }
}
