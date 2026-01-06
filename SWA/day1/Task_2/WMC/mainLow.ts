class SimpleTicketPricingEngine {

    private basePrice: number = 0;
    private showtimeHour: number = 18;

    fetchBasePrice(): number {
        return this.basePrice = 150;
    }

    applyWeekendSurcharge(): void {
        if (this.showtimeHour >= 18) {
            this.basePrice += 20;
        }
    }

    applyTax(): number {
        return this.basePrice * 1.05;
    }

    getFinalPrice(): number {
        this.fetchBasePrice();
        this.applyWeekendSurcharge();
        return this.applyTax();
    }
}

// ---------------- MAIN ----------------

function mainLow() {
    const engine = new SimpleTicketPricingEngine();
    console.log("LOW WMC Price =", engine.getFinalPrice());
}

mainLow();
