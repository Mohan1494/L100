abstract class Bird{
    abstract void eat();
}

interface Flyable{
    void fly();
}
interface Swimmable{
    void swim();
}

class Sparrow extends Bird implements Flyable{
    public void eat(){
        System.out.println("Sparrow is eating");
    }
    public void fly(){
        System.out.println("Sparrow is flying");
    }
}

class Penguin extends Bird implements Swimmable{
    public void eat(){
         System.out.println("Penguin is eating");
    }
    public void swim(){
        System.out.println("Penguin is swimming");
    }
}
public class Main2{
    public static void main(String[] args) {

        Bird penguin = new Penguin();
        Bird sparrow = new Sparrow();

        penguin.eat(); 
        sparrow.eat();  

        Flyable flyingBird = new Sparrow();
        flyingBird.fly(); 

        Swimmable penguinbird = new Penguin();

        penguinbird.swim();
    }
}

