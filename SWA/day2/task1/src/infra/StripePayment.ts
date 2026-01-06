import { PaymentProcessor } from "../domain/PaymentProcessor";

export class StripePayment implements PaymentProcessor {
    pay(amount: number): void {
        console.log("Stripe processing ₹" + amount);
    }
}
