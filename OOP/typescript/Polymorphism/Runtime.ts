class NavigationMode {
    navigate() {
        console.log("Calculating route...");
    }
}

class CarMode extends NavigationMode {
    navigate() {
        console.log("Car route selected: Fastest highways.");
    }
}

class BikeMode extends NavigationMode {
    navigate() {
        console.log("Bike route selected: Cycle-safe paths.");
    }
}

class WalkMode extends NavigationMode {
    navigate() {
        console.log("Walking route selected: Shortest footpath.");
    }
}

function startNavigation(mode: NavigationMode) {
    mode.navigate(); 
}

// Runtime decision
startNavigation(new CarMode());
startNavigation(new BikeMode());
startNavigation(new WalkMode());
