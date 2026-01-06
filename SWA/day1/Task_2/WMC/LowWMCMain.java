class SimpleTicketPricingEngine {

    private double basePrice;
    private int showtimeHour;

    public double fetchBasePrice() {
        return basePrice = 150.0;
    }

    public void applyWeekendSurcharge() {
        if (showtimeHour >= 18) {
            basePrice += 20;
        }
    }

    public double applyTax() {
        return basePrice * 1.05; // 5% tax
    }

    public double getFinalPrice() {
        fetchBasePrice();
        applyWeekendSurcharge();
        return applyTax();
    }
}


public class LowWMCMain {
    public static void main(String[] args) {
        SimpleTicketPricingEngine engine = new SimpleTicketPricingEngine();
        double price = engine.getFinalPrice();
        System.out.println("LOW WMC Price = " + price);
    }
}
