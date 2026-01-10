export interface PaymentMethod {
    validateDetails(): void;
    executePayment(amount: number): void;
    getReceipt(): string;
}
