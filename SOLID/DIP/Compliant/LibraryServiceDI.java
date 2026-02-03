interface FineCalculator {
    int calculateFine(int lateDays);
}

class RegularFineCalculator implements FineCalculator {
    public int calculateFine(int lateDays) {
        return lateDays * 5;
    }
}

class ExamTimeFineCalculator implements FineCalculator {
    public int calculateFine(int lateDays) {
        return lateDays * 2;
    }
}

class NoFineCalculator implements FineCalculator {
    public int calculateFine(int lateDays) {
        return 0;
    }
}

class LibraryService {
    private FineCalculator calculator;

    LibraryService(FineCalculator calculator) {
        this.calculator = calculator;
    }

    int getFine(int lateDays) {
        return calculator.calculateFine(lateDays);
    }
}
public class LibraryServiceDI {
    public static void main(String[] args) {

        FineCalculator calculator = new ExamTimeFineCalculator();
        LibraryService service = new LibraryService(calculator);

        System.out.println(service.getFine(3));
    }
}
