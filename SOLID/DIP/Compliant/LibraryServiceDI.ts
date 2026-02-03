// Abstraction
interface FineCalculator {
  calculateFine(lateDays: number): number;
}

// Implementations
class RegularFineCalculator1 implements FineCalculator {
  calculateFine(lateDays: number): number {
    return lateDays * 5;
  }
}

class ExamTimeFineCalculator implements FineCalculator {
  calculateFine(lateDays: number): number {
    return lateDays * 2;
  }
}

class NoFineCalculator implements FineCalculator {
  calculateFine(lateDays: number): number {
    return 0;
  }
}

// High-level module
class LibraryService1 {
  private calculator: FineCalculator;

  constructor(calculator: FineCalculator) {
    this.calculator = calculator;
  }

  getFine(lateDays: number): number {
    return this.calculator.calculateFine(lateDays);
  }
}

// Main
const calculator: FineCalculator = new ExamTimeFineCalculator();
const service = new LibraryService1(calculator);

console.log(service.getFine(3));
