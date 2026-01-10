
class CreditCard implements PaymentMethod {
    private String cardNumber;

    public CreditCard(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Override
    public void validateDetails() {
        System.out.println("Checking Credit Card limit and Expiry Date...");
    }

    @Override
    public void executePayment(double amount) {
        System.out.println("Charging $" + amount + " to card: " + cardNumber);
    }

    @Override
    public String getReceipt() {
        return "Receipt: Paid via Visa/Mastercard.";
    }
}



















class PayPal implements PaymentMethod {
    private String email;

    public PayPal(String email) {
        this.email = email;
    }

    @Override
    public void validateDetails() {
        System.out.println("Redirecting to PayPal login for " + email + "...");
    }

    @Override
    public void executePayment(double amount) {
        System.out.println("PayPal balance deducted by $" + amount);
    }

    @Override
    public String getReceipt() {
        return "Receipt: Paid via PayPal Digital Wallet.";
    }
}



















public class OnlineStore {
    public static void main(String[] args) {
        // The user chooses a payment method at checkout
        PaymentMethod mySelection = new CreditCard("1234-5678-9012");
        
        // We can process it without knowing which one it is!
        processOrder(mySelection, 150.00);
    }

    public static void processOrder(PaymentMethod method, double total) {
        method.validateDetails();
        method.executePayment(total);
        System.out.println(method.getReceipt());
    }
}