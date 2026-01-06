class ScreeningSchedule {
  getShowTimes() { console.log("Fetching showtimes..."); }
}

class SeatMap {
  lockSeat() { console.log("Seat locked."); }
}

class LoyaltySystem {
  checkPoints() { console.log("Checking loyalty points..."); }
}

class PaymentGateway {
  processPayment() { console.log("Processing payment..."); }
}

class TicketPrinter {
  print() { console.log("Printing ticket..."); }
}

class BoxOfficeTerminal {
  schedule = new ScreeningSchedule();
  seatmap = new SeatMap();
  loyalty = new LoyaltySystem();
  payment = new PaymentGateway();
  printer = new TicketPrinter();

  bookTicket() {
    this.schedule.getShowTimes();
    this.seatmap.lockSeat();
    this.loyalty.checkPoints();
    this.payment.processPayment();
    this.printer.print();
    console.log("Ticket booking completed!");
  }
}

export function highcbo() {
  const terminal = new BoxOfficeTerminal();
  terminal.bookTicket();
  console.log("High CBO = 5 dependencies");
}

highcbo();
