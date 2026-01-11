class Teller:
    # Responsibility: Handle cash deposits
    def deposit_cash(self, amount, ledger):
        print(f"Teller: Safely counting ${amount}...")
        ledger.record(f"Cash Deposit: ${amount}")


class LoanOfficer:
    # Responsibility: Evaluate mortgage applications
    def evaluate_mortgage(self, credit_score, income):
        print("Loan Dept: Running credit risk algorithms...")
        return credit_score > 700 and income > 50000


class BankLedger:
    # Responsibility: Record ledger entries
    def __init__(self):
        self.entries = []

    def record(self, message):
        self.entries.append({"time": "now", "action": message})
        print("Ledger: Entry saved successfully.")


def main():
    ledger = BankLedger()
    teller = Teller()
    loan_officer = LoanOfficer()

    teller.deposit_cash(500, ledger)

    approved = loan_officer.evaluate_mortgage(750, 60000)
    print(f"Mortgage Result: {'Approved' if approved else 'Denied'}")


main()
