class TicketPricingEngine {
    private double basePrice;
    private int showtimeHour;
    private int moviePopularityIndex;
    private String userLoyaltyTier;

    // Constructor to initialize values
    public TicketPricingEngine(double basePrice, int showtimeHour, int moviePopularityIndex, String userLoyaltyTier) {
        this.basePrice = basePrice;
        this.showtimeHour = showtimeHour;
        this.moviePopularityIndex = moviePopularityIndex;
        this.userLoyaltyTier = userLoyaltyTier;
    }

    // Fetch the base price based on the movie popularity index
    public double fetchBasePrice() {
        return 150.0 + moviePopularityIndex * 2;
    }

    // Apply weekend surcharge based on showtime hour
    public void applyWeekendSurcharge() {
        if (showtimeHour == 18 || showtimeHour == 21) {
            basePrice += 50;
        }
    }

    // Apply tax on the base price
    public void applyTax() {
        basePrice = basePrice * 1.12; // 12% multiplex tax
    }

    // Calculate dynamic price based on different conditions
    public void calculateDynamicPrice(boolean is3D, boolean isIMAX, int hallOccupancy, boolean isPremiere, boolean isStudent) {
        if (is3D) basePrice += 30;
        if (isIMAX) basePrice += 80;

        if (hallOccupancy > 80) {
            basePrice += 40;
        } else if (hallOccupancy < 40) {
            basePrice -= 10;
        }

        if (isPremiere) {
            for (int i = 0; i < 3; i++) {
                basePrice += 20;
            }
        }

        if (isStudent) {
            basePrice -= 25;
        }

        switch (userLoyaltyTier) {
            case "GOLD" -> basePrice -= 20;
            case "PLATINUM" -> basePrice -= 40;
        }
    }

    // Calculate the final price
    public double getFinalPrice(boolean is3D, boolean isIMAX, int hallOccupancy, boolean isPremiere, boolean isStudent) {
        fetchBasePrice();
        applyWeekendSurcharge();
        calculateDynamicPrice(is3D, isIMAX, hallOccupancy, isPremiere, isStudent);
        applyTax();
        return basePrice;
    }
}

public class HighWMCMain {
    public static void main(String[] args) {
        // Define user attributes and pricing parameters
        double basePrice = 150.0; // base price
        int showtimeHour = 19; // Example: 7 PM show
        int moviePopularityIndex = 3; // Example popularity index
        String userLoyaltyTier = "PLATINUM"; // Example user loyalty tier

        // Initialize TicketPricingEngine with these values
        TicketPricingEngine engine = new TicketPricingEngine(basePrice, showtimeHour, moviePopularityIndex, userLoyaltyTier);

        // Extra conditions for dynamic pricing (example)
        boolean is3D = true;
        boolean isIMAX = false;
        int hallOccupancy = 85;
        boolean isPremiere = true;
        boolean isStudent = false;

        // Calculate final price
        double finalPrice = engine.getFinalPrice(is3D, isIMAX, hallOccupancy, isPremiere, isStudent);

        // Output final price
        System.out.println("HIGH WMC Price = " + finalPrice);
    }
}
