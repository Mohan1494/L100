class RegularFineCalculator {
    int calculateFine(int lateDays) {
        return lateDays * 5;
    }
}

class LibraryService {
    private RegularFineCalculator calculator = new RegularFineCalculator();

    int getFine(int lateDays) {
        return calculator.calculateFine(lateDays);
    }
}
