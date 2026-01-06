class Seat {
    public void type() {
        System.out.println("Generic seat");
    }
}

class StandardSeat extends Seat {
    public void sit() {
        System.out.println("Standard seat sitting");
    }
}

public class LowDITMain {
    public static void main(String[] args) {
        StandardSeat st = new StandardSeat();
        st.type();
        st.sit();
        System.out.println("Low DIT = 1");
    }
}
