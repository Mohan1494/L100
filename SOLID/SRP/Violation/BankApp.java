import java.util.ArrayList;
import java.util.List;

class BankGeneralist {

    private List<String> ledger = new ArrayList<>();

    // Task 1: Cashier Job
    public void depositCash(double amount) {
        System.out.println("Counting physical cash: $" + amount);
        ledger.add("Deposit: $" + amount);
    }

    // Task 2: Loan Officer Job
    public boolean evaluateMortgage(int creditScore, double income) {
        System.out.println("Running loan evaluation...");
        return creditScore > 700 && income > 50000;
    }

    // Task 3: Security / Fraud Job
    public void investigateFraud(String transactionId) {
        System.out.println("Investigating possible fraud: " + transactionId);
    }
}

public class BankApp {
    public static void main(String[] args) {
        BankGeneralist employee = new BankGeneralist();

        employee.depositCash(500);
        boolean result = employee.evaluateMortgage(720, 60000);
        employee.investigateFraud("TXN12345");

        System.out.println("Loan Result: " + (result ? "Approved" : "Denied"));
    }
}
