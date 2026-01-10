import { PaymentMethod } from "./PaymentMethod";

class CreditCard implements PaymentMethod {
    private cardNumber: string;

    constructor(cardNumber: string) {
        this.cardNumber = cardNumber;
    }

    validateDetails(): void {
        console.log("Checking Credit Card limit and Expiry Date...");
    }

    executePayment(amount: number): void {
        console.log(`Charging $${amount} to card: ${this.cardNumber}`);
    }

    getReceipt(): string {
        return "Receipt: Paid via Visa/Mastercard.";
    }
}

class PayPal implements PaymentMethod {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    validateDetails(): void {
        console.log(`Redirecting to PayPal login for ${this.email}...`);
    }

    executePayment(amount: number): void {
        console.log(`PayPal balance deducted by $${amount}`);
    }

    getReceipt(): string {
        return "Receipt: Paid via PayPal Digital Wallet.";
    }
}



class OnlineStore {
    static main(): void {
        // The user chooses a payment method at checkout
        const mySelection: PaymentMethod = new CreditCard("1234-5678-9012");

        // We can process it without knowing which one it is!
        OnlineStore.processOrder(mySelection, 150.00);
    }

    static processOrder(method: PaymentMethod, total: number): void {
        method.validateDetails();
        method.executePayment(total);
        console.log(method.getReceipt());
    }
}

// Run the app
OnlineStore.main();
