// Parent class
package Polymorphism;
class NavigationMode {
    void navigate() {
        System.out.println("Calculating route...");
    }
}

// Child class 1
class CarMode extends NavigationMode {
    @Override
    void navigate() {
        System.out.println("Navigating by Car: Fastest road route selected.");
    }
}

// Child class 2
class BikeMode extends NavigationMode {
    @Override
    void navigate() {
        System.out.println("Navigating by Bike: Bike-friendly route selected.");
    }
}

// Child class 3
class WalkMode extends NavigationMode {
    @Override
    void navigate() {
        System.out.println("Navigating by Walking: Shortest footpath route selected.");
    }
}

public class Runtime {
    public static void main(String[] args) {

        NavigationMode mode;

        mode = new CarMode();
        mode.navigate();   // Car route

        mode = new BikeMode();
        mode.navigate();   // Bike route

        mode = new WalkMode();
        mode.navigate();   // Walk route
    }
}
