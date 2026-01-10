# Hierarchical Inheritance Example

class BankTransaction:
    def __init__(self, txn_id, amount):
        self.txn_id = txn_id
        self.amount = amount


class Deposit(BankTransaction):
    def __init__(self, txn_id, amount, source_bank):
        super().__init__(txn_id, amount)
        self.source_bank = source_bank


class Withdrawal(BankTransaction):
    def __init__(self, txn_id, amount, atm_location):
        super().__init__(txn_id, amount)
        self.atm_location = atm_location


class Transfer(BankTransaction):
    def __init__(self, txn_id, amount, receiver_acc):
        super().__init__(txn_id, amount)
        self.receiver_acc = receiver_acc


d = Deposit("TXN001", 5000, "SBI")
w = Withdrawal("TXN002", 2000, "Chennai ATM")
t = Transfer("TXN003", 10000, "1234567890")
