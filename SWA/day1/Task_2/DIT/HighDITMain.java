class Seat {
    public void type() {
        System.out.println("Generic seat");
    }
}

class PremiumSeat extends Seat {
    public void comfort() {
        System.out.println("Premium comfort");
    }
}

class BoxSuite extends PremiumSeat {
    public void privateRoom() {
        System.out.println("Box suite privacy");
    }
}

class PrivateBalcony extends BoxSuite {
    public void balconyView() {
        System.out.println("Balcony view");
    }
}

public class HighDITMain {
    public static void main(String[] args) {
        PrivateBalcony pb = new PrivateBalcony();
        pb.type();
        pb.comfort();
        pb.privateRoom();
        pb.balconyView();
        System.out.println("High DIT = 4");
    }
}
