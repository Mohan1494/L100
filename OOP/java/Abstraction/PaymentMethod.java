interface PaymentMethod {
    // Contract: Every payment method must allow these actions
    void validateDetails();
    void executePayment(double amount);
    String getReceipt();
}