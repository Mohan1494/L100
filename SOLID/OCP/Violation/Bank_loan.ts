class LoanOfficer1 {

    evaluateLoan(type: string, amount: number): boolean {
        if (type === "Personal") {
            return amount < 10000;

        } else if (type === "Mortgage") {
            return amount < 500000;

        } else if (type === "Car") {
            return amount < 50000;

        } else {
            // Unknown loan type
            return false;
        }
    }
}


// Usage
const officer = new LoanOfficer1();

console.log("Personal Loan:", officer.evaluateLoan("Personal", 8000));
console.log("Mortgage Loan:", officer.evaluateLoan("Mortgage", 400000));
console.log("Car Loan:", officer.evaluateLoan("Car", 30000));

// Adding new loan type? Must MODIFY evaluateLoan → violates OCP
console.log("Gold Loan:", officer.evaluateLoan("Gold", 15000));
