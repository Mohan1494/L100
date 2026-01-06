abstract class ConcessionItem {
    public abstract void serve();
}

class Popcorn extends ConcessionItem {
    public void serve() { System.out.println("Serving Popcorn"); }
}

class Soda extends ConcessionItem {
    public void serve() { System.out.println("Serving Soda"); }
}

class Candy extends ConcessionItem {
    public void serve() { System.out.println("Serving Candy"); }
}

class HotDog extends ConcessionItem {
    public void serve() { System.out.println("Serving HotDog"); }
}

class Nachos extends ConcessionItem {
    public void serve() { System.out.println("Serving Nachos"); }
}

public class HighNOCMain {
    public static void main(String[] args) {
        ConcessionItem item;

        item = new Popcorn(); item.serve();
        item = new Soda(); item.serve();
        item = new Candy(); item.serve();
        item = new HotDog(); item.serve();
        item = new Nachos(); item.serve();

        System.out.println("High NOC = 5 children of ConcessionItem");
    }
}
