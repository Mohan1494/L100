class LoanOfficer {

    public boolean evaluateLoan(String type, double amount) {
        if (type.equals("Personal")) {
            return amount < 10000;
        } else if (type.equals("Mortgage")) {
            return amount < 500000;
        } else if (type.equals("Car")) {
            return amount < 50000;
        } else {
            // Unknown loan type
            return false;
        }
    }
}

public class Bank {
    public static void main(String[] args) {

        LoanOfficer officer = new LoanOfficer();

        System.out.println("Personal Loan: " + officer.evaluateLoan("Personal", 8000));
        System.out.println("Mortgage Loan: " + officer.evaluateLoan("Mortgage", 400000));
        System.out.println("Car Loan: " + officer.evaluateLoan("Car", 30000));

        // If you add a new loan type, you are forced to modify LoanOfficer (violation!)
        System.out.println("Gold Loan: " + officer.evaluateLoan("Gold", 20000));
    }
}
