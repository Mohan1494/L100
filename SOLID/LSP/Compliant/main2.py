from abc import ABC, abstractmethod

# Abstract base class
class Bird(ABC):
    @abstractmethod
    def eat(self):
        pass


# Interfaces (Abstract Base Classes)
class Flyable(ABC):
    @abstractmethod
    def fly(self):
        pass


class Swimmable(ABC):
    @abstractmethod
    def swim(self):
        pass


# Sparrow class
class Sparrow(Bird, Flyable):
    def eat(self):
        print("Sparrow is eating")

    def fly(self):
        print("Sparrow is flying")


# Penguin class
class Penguin(Bird, Swimmable):
    def eat(self):
        print("Penguin is eating")

    def swim(self):
        print("Penguin is swimming")


# Main
penguin: Bird = Penguin()
sparrow: Bird = Sparrow()

penguin.eat()
sparrow.eat()

flying_bird: Flyable = Sparrow()
flying_bird.fly()

penguin_bird: Swimmable = Penguin()
penguin_bird.swim()
