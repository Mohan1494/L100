from abc import ABC, abstractmethod

class PaymentMethod(ABC):
    @abstractmethod
    def pay(self, amount): pass

    @abstractmethod
    def refund(self, amount): pass

    @abstractmethod
    def setup_recurring(self, amount): pass


class UpiPayment(PaymentMethod):
    def pay(self, amount):
        print(f"Paid ₹{amount} via UPI")

    def refund(self, amount):
        print(f"Refunded ₹{amount} via UPI")

    def setup_recurring(self, amount):
        raise Exception("UPI does not support recurring payments")
