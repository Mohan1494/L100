class LoanValidator:
    def validate(self, amount):
        raise NotImplementedError("Subclasses must implement this method")

class PersonalLoan(LoanValidator):
    def validate(self, amount):
        return amount < 10000


class MortgageLoan(LoanValidator):
    def validate(self, amount):
        return amount < 500000


class CarLoan(LoanValidator):
    def validate(self, amount):
        return amount < 50000

class LoanOfficer:
    def evaluate(self, loan: LoanValidator, amount: float):
        return loan.validate(amount)
        
officer = LoanOfficer()

personal = PersonalLoan()
mortgage = MortgageLoan()
car = CarLoan()

print("Personal Loan:", officer.evaluate(personal, 8000))
print("Mortgage Loan:", officer.evaluate(mortgage, 400000))
print("Car Loan:", officer.evaluate(car, 30000))
