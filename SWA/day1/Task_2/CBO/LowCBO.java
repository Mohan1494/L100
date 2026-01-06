class SimplePayment {
    void pay() {
        System.out.println("Simple payment done.");
    }
}

class SnackCounter {
    SimplePayment payment = new SimplePayment();

    void buySnack() {
        payment.pay();
        System.out.println("Snack purchased.");
    }
}

public class LowCBO {
    public static void main(String[] args) {
        SnackCounter counter = new SnackCounter();
        counter.buySnack();
        System.out.println("Low CBO = 1 dependency");
    }
}
