class ScreeningSchedule {
    void getShowTimes() { System.out.println("Fetching showtimes..."); }
}

class SeatMap {
    void lockSeat() { System.out.println("Seat locked."); }
}

class LoyaltySystem {
    void checkPoints() { System.out.println("Checking loyalty points..."); }
}

class PaymentGateway {
    void processPayment() { System.out.println("Processing payment..."); }
}

class TicketPrinter {
    void print() { System.out.println("Printing ticket..."); }
}

class BoxOfficeTerminal {
    ScreeningSchedule schedule = new ScreeningSchedule();
    SeatMap seatmap = new SeatMap();
    LoyaltySystem loyalty = new LoyaltySystem();
    PaymentGateway payment = new PaymentGateway();
    TicketPrinter printer = new TicketPrinter();

    void bookTicket() {
        schedule.getShowTimes();
        seatmap.lockSeat();
        loyalty.checkPoints();
        payment.processPayment();
        printer.print();
        System.out.println("Ticket booking completed!");
    }
}

public class HighCBO {
    public static void main(String[] args) {
        BoxOfficeTerminal terminal = new BoxOfficeTerminal();
        terminal.bookTicket();
        System.out.println("High CBO = 5 dependencies");
    }
}
