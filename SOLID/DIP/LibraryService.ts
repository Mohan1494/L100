class RegularFineCalculator {
  calculateFine(lateDays: number): number {
    return lateDays * 5;
  }
}

class LibraryService {
  private calculator: RegularFineCalculator = new RegularFineCalculator();

  getFine(lateDays: number): number {
    return this.calculator.calculateFine(lateDays);
  }
}
