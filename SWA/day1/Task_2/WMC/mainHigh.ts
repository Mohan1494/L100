class TicketPricingEngine {

    private basePrice: number = 0;
    private showtimeHour: number = 18;
    private moviePopularityIndex: number = 3;
    private userLoyaltyTier: string = "GOLD";

    fetchBasePrice(): number {
        return this.basePrice = 150 + this.moviePopularityIndex * 2;
    }

    applyWeekendSurcharge(): void {
        if (this.showtimeHour === 18 || this.showtimeHour === 21) {
            this.basePrice += 50;
        }
    }

    applyTax(): void {
        this.basePrice = this.basePrice * 1.12;
    }

    calculateDynamicPrice(is3D: boolean, isIMAX: boolean, hallOccupancy: number, isPremiere: boolean, isStudent: boolean): void {
        // HIGH COMPLEXITY LOGIC
        if (is3D) this.basePrice += 30;
        if (isIMAX) this.basePrice += 80;

        if (hallOccupancy > 80) this.basePrice += 40;
        else if (hallOccupancy < 40) this.basePrice -= 10;

        if (isPremiere) {
            for (let i = 0; i < 3; i++) {
                this.basePrice += 20;
            }
        }

        if (isStudent) this.basePrice -= 25;

        switch (this.userLoyaltyTier) {
            case "GOLD": this.basePrice -= 20; break;
            case "PLATINUM": this.basePrice -= 40; break;
        }
    }

    getFinalPrice(): number {
        this.fetchBasePrice();
        this.applyWeekendSurcharge();
        this.calculateDynamicPrice(true, false, 85, true, false);
        this.applyTax();
        return this.basePrice;
    }
}

// ---------------- MAIN ----------------

function mainHigh() {
    const engine = new TicketPricingEngine();
    console.log("HIGH WMC Price =", engine.getFinalPrice());
}

mainHigh();
