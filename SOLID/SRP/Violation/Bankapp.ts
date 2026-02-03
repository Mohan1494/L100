class BankGeneralist {
    private ledger: string[] = [];

    // Task 1: Cash Handling
    handleCashDeposit(amount: number) {
        console.log(`Counting $${amount} in cash...`);
        this.ledger.push(`Deposit: $${amount}`);
    }

    // Task 2: Loan Evaluation
    evaluateMortgage(creditScore: number, income: number): boolean {
        console.log("Evaluating mortgage eligibility...");
        return creditScore > 700 && income > 50000;
    }

    // Task 3: Fraud Investigation
    investigateFraud(transactionId: string) {
        console.log(`Investigating fraud for transaction ${transactionId}...`);
    }
}

function main() {
    const bankEmployee = new BankGeneralist();

    bankEmployee.handleCashDeposit(500);
    console.log(bankEmployee.evaluateMortgage(750, 60000));
    bankEmployee.investigateFraud("TXN99887");
}

main();
