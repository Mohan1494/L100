interface LoanValidator {
    validate(amount: number): boolean;
}

class PersonalLoan implements LoanValidator {
    validate(amount: number): boolean {
        return amount < 10000;
    }
}

class MortgageLoan implements LoanValidator {
    validate(amount: number): boolean {
        return amount < 500000;
    }
}

class CarLoan implements LoanValidator {
    validate(amount: number): boolean {
        return amount < 50000;
    }
}

class LoanOfficer {
    evaluate(loan: LoanValidator, amount: number): boolean {
        return loan.validate(amount);
    }
}

const officer2 = new LoanOfficer();

console.log("Personal Loan:", officer2.evaluate(new PersonalLoan(), 9000));
console.log("Mortgage Loan:", officer2.evaluate(new MortgageLoan(), 400000));
console.log("Car Loan:", officer2.evaluate(new CarLoan(), 30000));
