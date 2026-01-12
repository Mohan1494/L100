class LoanOfficer:

    def evaluate_loan(self, loan_type, amount):
        if loan_type == "Personal":
            return amount < 10000
        elif loan_type == "Mortgage":
            return amount < 500000
        elif loan_type == "Car":
            return amount < 50000
        else:
            # Unknown loan type
            return False


# Usage
officer = LoanOfficer()

print("Personal Loan:", officer.evaluate_loan("Personal", 8000))
print("Mortgage Loan:", officer.evaluate_loan("Mortgage", 400000))
print("Car Loan:", officer.evaluate_loan("Car", 30000))

# Adding a new loan type requires MODIFYING the original class → violation!
print("Gold Loan:", officer.evaluate_loan("Gold", 20000))
