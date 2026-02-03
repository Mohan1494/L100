// Abstract class
abstract class Bird {
  abstract eat(): void;
}

// Interfaces
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

// Sparrow class
class Sparrow extends Bird implements Flyable {
  eat(): void {
    console.log("Sparrow is eating");
  }

  fly(): void {
    console.log("Sparrow is flying");
  }
}

// Penguin class
class Penguin extends Bird implements Swimmable {
  eat(): void {
    console.log("Penguin is eating");
  }

  swim(): void {
    console.log("Penguin is swimming");
  }
}

// Main
const penguin: Bird = new Penguin();
const sparrow: Bird = new Sparrow();

penguin.eat();
sparrow.eat();

const flyingBird: Flyable = new Sparrow();
flyingBird.fly();

const penguinBird: Swimmable = new Penguin();
penguinBird.swim();
