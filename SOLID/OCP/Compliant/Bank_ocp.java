interface LoanValidator {
    boolean validate(double amount);
}

class PersonalLoan implements LoanValidator {
    @Override
    public boolean validate(double amount) {
        return amount < 10000;
    }
}
class MortgageLoan implements LoanValidator {
    @Override
    public boolean validate(double amount) {
        return amount < 500000;
    }
}
class CarLoan implements LoanValidator {
    @Override
    public boolean validate(double amount) {
        return amount < 50000;
    }
}
class LoanOfficer {

    public boolean evaluate(LoanValidator loan, double amount) {
        return loan.validate(amount); 
    }
}
public class Bank_ocp {
    public static void main(String[] args) {

        LoanOfficer officer = new LoanOfficer();

        LoanValidator personal = new PersonalLoan();
        LoanValidator home = new MortgageLoan();
        LoanValidator car = new CarLoan();

        System.out.println("Personal Loan: " + officer.evaluate(personal, 8000));
        System.out.println("Mortgage Loan: " + officer.evaluate(home, 400000));
        System.out.println("Car Loan: " + officer.evaluate(car, 30000));

        // Adding a NEW LOAN without modifying LoanOfficer
        LoanValidator goldLoan = new LoanValidator() {
            @Override
            public boolean validate(double amount) {
                return amount < 20000;
            }
        };

        System.out.println("Gold Loan: " + officer.evaluate(goldLoan, 15000));
    }
}
