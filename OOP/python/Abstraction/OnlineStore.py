from abc import ABC, abstractmethod
# Interface (Contract)
class PaymentMethod(ABC):

    @abstractmethod
    def validate_details(self):
        pass

    @abstractmethod
    def execute_payment(self, amount):
        pass

    @abstractmethod
    def get_receipt(self):
        pass


class CreditCard(PaymentMethod):
    def __init__(self, card_number):
        self.card_number = card_number

    def validate_details(self):
        print("Checking Credit Card limit and Expiry Date...")

    def execute_payment(self, amount):
        print(f"Charging ${amount} to card: {self.card_number}")

    def get_receipt(self):
        return "Receipt: Paid via Visa/Mastercard."


class PayPal(PaymentMethod):
    def __init__(self, email):
        self.email = email

    def validate_details(self):
        print(f"Redirecting to PayPal login for {self.email}...")

    def execute_payment(self, amount):
        print(f"PayPal balance deducted by ${amount}")

    def get_receipt(self):
        return "Receipt: Paid via PayPal Digital Wallet."


class OnlineStore:
    @staticmethod
    def process_order(method: PaymentMethod, total):
        method.validate_details()
        method.execute_payment(total)
        print(method.get_receipt())


# Main execution
if __name__ == "__main__":
    # User selects a payment method
    my_selection = CreditCard("1234-5678-9012")

    # Process order without knowing the concrete type
    OnlineStore.process_order(my_selection, 150.00)
