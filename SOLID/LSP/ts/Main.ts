class Bird {
    fly(): void {
        console.log("Bird is flying");
    }
}

class Penguin extends Bird {
    fly(): void {
        throw new Error("Penguins cannot fly");
    }
}

// Main execution
const b: Bird = new Bird();
const p: Bird = new Penguin();
b.fly();
p.fly();