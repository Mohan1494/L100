class Seat {
    public void info() {
        System.out.println("General Seat");
    }
}

class StandardSeat extends Seat {
    public void sit() {
        System.out.println("Sitting in Standard Seat");
    }
}

public class LowNOCMain {
    public static void main(String[] args) {
        StandardSeat st = new StandardSeat();
        st.info();
        st.sit();

        System.out.println("Low NOC = 1 child of Seat");
    }
}
