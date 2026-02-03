class BankGeneralist:

    def __init__(self):
        self.ledger = []

    # Task 1: Cashier Duty
    def deposit_cash(self, amount):
        print(f"Counting cash: ${amount}")
        self.ledger.append(f"Deposit: ${amount}")

    # Task 2: Loan Officer Duty
    def evaluate_mortgage(self, credit_score, income):
        print("Evaluating mortgage approval...")
        return credit_score > 700 and income > 50000

    # Task 3: Fraud Investigation
    def investigate_fraud(self, transaction_id):
        print(f"Investigating fraud for transaction {transaction_id}...")
        

def main():
    generalist = BankGeneralist()
    generalist.deposit_cash(500)
    print(generalist.evaluate_mortgage(720, 60000))
    generalist.investigate_fraud("TXN1001")


main()
