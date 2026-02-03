class Teller {
    depositCash(amount: number, ledger: BankLedger) {
        console.log(`Teller: Safely counting $${amount}...`);
        ledger.record(`Cash Deposit: $${amount}`);
    }
}

class LoanOfficer {
    evaluateMortgage(creditScore: number, income: number): boolean {
        console.log("Loan Dept: Running credit risk algorithms...");
        return creditScore > 700 && income > 50000;
    }
}

class BankLedger {
    private entries: string[] = [];

    record(message: string) {
        this.entries.push(message);
        console.log("Ledger: Entry saved successfully.");
    }
}

// Main function to coordinate the system
function main() {
    const ledger = new BankLedger();
    const teller = new Teller();
    const loanOfficer = new LoanOfficer();

    teller.depositCash(500, ledger);

    const approved = loanOfficer.evaluateMortgage(750, 60000);
    console.log(`Mortgage Result: ${approved ? "Approved" : "Denied"}`);
}

main();
