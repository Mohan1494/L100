class Bird {
    public void fly() {
        System.out.println("Bird is flying");
    }
}

class Penguin extends Bird {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Penguins cannot fly");
    }
}

public class Main{
    public static void main(String[] args){
        Bird    b  = new Bird();
        Bird p = new Penguin();
        b.fly();
        p.fly();
    }
}