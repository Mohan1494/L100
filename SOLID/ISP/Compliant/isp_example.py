from abc import ABC, abstractmethod

class Payable(ABC):
    @abstractmethod
    def pay(self, amount): pass


class Refundable(ABC):
    @abstractmethod
    def refund(self, amount): pass


class RecurringPayable(ABC):
    @abstractmethod
    def setup_recurring(self, amount): pass


class UpiPayment(Payable, Refundable):
    def pay(self, amount):
        print(f"Paid ₹{amount} via UPI")

    def refund(self, amount):
        print(f"Refunded ₹{amount} via UPI")


class CreditCardPayment(Payable, Refundable, RecurringPayable):
    def pay(self, amount):
        print(f"Paid ₹{amount} via Credit Card")

    def refund(self, amount):
        print(f"Refunded ₹{amount} to Credit Card")

    def setup_recurring(self, amount):
        print(f"Recurring payment of ₹{amount} set up")
