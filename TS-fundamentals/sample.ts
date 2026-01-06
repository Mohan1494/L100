//Sample ts code
// let displayData = (
//     id: number, 
//     name: string, 
//     field: string) : string => {
//           return (id + " - " + name + " - " + field);
// }

// console.log(displayData(1 , "Mohan", "IT"));
//Compiled Js code
// var displayData = function (id, name, field) {
//     return id + " - " + name + " - " + field;
// };
// console.log(displayData(1, "Mohan", "IT"));

function testVar() {
  var globalVar = "I am a function-scoped variable";
  console.log(globalVar);  
}
testVar();


let count = 5;
if (count > 0) {
  let message = "Count is positive";
  console.log(message); 
}
// console.log(message);  // Error: message is not accessible here


const country = "India";
// country = "USA";  // Error: Cannot assign to 'country' because it is a constant
console.log(country);


// Type Annotations
// variable and function type
let userName: string = "Arjun";  
let age: number = 25;            
let isActive: boolean = true;    

function greetUser(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

let greeting = greetUser(userName, age);
console.log(greeting);

// object
const person: { name: string; age: number } = {
    name: "Alice",
    age: 30
};
console.log(person);
//array
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
//class
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}
const rect = new Rectangle(5, 10);
console.log(rect); 
console.log(rect.area());

//type inference
//variable
let x = 10; // TypeScript infers x as a number
console.log(typeof x);

//array
let fruits = ["Apple", "Banana", "Cherry"]; // TypeScript infers fruits as string[]
console.log(fruits);

//function
function add(a: number, b: number) {
    return a + b; // TypeScript infers the return type as number
}
console.log(add(5, 10));

//Enums
//numeric:In default numeric enums, the first member is assigned the value 0, and each subsequent member is incremented by 1.
enum Direction {
    Up1,
    Down1,
    Left1,
    Right1
}

let move1: Direction = Direction.Up;
console.log(move1);
//Initialized Numeric Enums : You can assign a specific value to the first member, and subsequent members will auto-increment from that value.
enum Direction {
    Up2 = 1,
    Down2,
    Left2,
    Right2
}

let move2: Direction = Direction.Up;
console.log(move2);
//Fully Initialized Numeric Enums:Each member can be assigned a unique numeric value, independent of its position.  
enum Direction {
    Up3 = 1,
    Down3 = 3,
    Left3 = 5,
    Right3 = 7
}

let move3: Direction = Direction.Up;
console.log(move3);
//String Enums : String enums allow you to assign string values to each member, providing meaningful names that enhance code clarity.
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let move: Direction = Direction.Up;
console.log(move);
//Heterogenous enums : TypeScript also supports heterogeneous enums, where you can mix both numeric and string values in the same enum.
enum Status {
    Active = 1,          
    Inactive = "INACTIVE", 
    Pending = 2,         
    Cancelled = "CANCELLED" 
}

let currentStatus: Status = Status.Active;
console.log(currentStatus); 

let cancelledStatus: Status = Status.Cancelled;
console.log(cancelledStatus);

//Literal Types
//String 
type direction = "Up" | "Down" | "Left" | "Right";

let movee: direction;

movee = "Up";
// move = "Forward"; Error: Type '"Forward"' is not assignable to type 'Direction'

//numeric
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
  return 4; // Valid
  // return 7; Error Type '7' is not assignable to type 'DiceRoll'
}

console.log(rollDice());

//Boolean
type Success = true;

function operation(): Success {
    return true; // Valid return value
    // return false; // Error Type 'false' is not assignable to type 'Success'
}
console.log(operation());

//Function Types:
//Named Function

function add1(a: number, b: number): number {
    return a + b;
}

console.log(add1(3, 4));

//Anonymous Function
const subtract = function(a: number, b: number): number {
    return a - b;
}

console.log(subtract(5, 2));

//Arrow Functions
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 5));

//Optional and default params in functions
function greet(firstName: string, lastName: string = "Doe"): string {
    return `Hello, ${firstName} ${lastName}`;
}

console.log(greet("John"));
console.log(greet("Joe", "Smith"));

function greet1(firstName: string, lastName?: string): string {
    return `Hello, ${firstName} ${lastName ?? "Doe"}`;
}

console.log(greet1("John"));
console.log(greet1("Joe", "Smith"));

//Funtion Overloading : defining multiple function signatures for a single function, allowing it to accept 
// different parameter types or counts while providing type safety.
function greet2(person: string): string;
function greet2(person: string, age: number): string;
function greet2(person: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${person}, you are ${age} years old!`;
    }
    return `Hello, ${person}!`;
}

console.log(greet2("Anne"));
console.log(greet2("John", 30));

//Callback Function : A callback function is a function that can be passed as an --
// --argument to another function and is executed when a specific event or task is completed.
function performOperation(a: number, b: number, callback: (result: number) => void): void {
    let result = a + b;
    callback(result);
}

performOperation(3, 4, (result) => {
    console.log(result);
});

//Call Signature
type Calculator = {
    (a: number, b: number): number; 
    operation: string;  
};

const add2: Calculator = (a: number, b: number) => a + b;
add2.operation = "Addition";

const multiply1: Calculator = (a: number, b: number) => a * b;
multiply1.operation = "Multiplication";

console.log(`${add2.operation}: ${add(5, 3)}`);        
console.log(`${multiply1.operation}: ${multiply(5, 3)}`);

//ObjectType
interface Car {
    make: string;
    model: string;
    year: number;
    electric?: boolean; // Optional property
}

const myCar: Car = {
    make: "Tesla",
    model: "Model S",
    year: 2022,
    electric: true
};

console.log(`I drive a ${myCar.year} ${myCar.make} ${myCar.model}.`);

//Nested Object type
interface Author {
    name: string;
    birthYear: number;
}

interface Book {
    title: string;
    author: Author;
    pages: number;
    genre?: string; // Optional property
}

const myBook: Book = {
    title: "TypeScript Basics",
    author: {
        name: "Jane Doe",
        birthYear: 1980
    },
    pages: 350
};

console.log(`${myBook.title} by ${myBook.author.name}`);

//Function param with obj type
interface Rectangle1 {
    width: number;
    height: number;
}
function calculateArea(rect: Rectangle1): number {
    return rect.width * rect.height;
}
const myRectangle1: Rectangle1 = {
    width: 10,
    height: 5
};
console.log(`Area: ${calculateArea(myRectangle1)}`);

//Interfaces
//Interface in a Class
interface Employee {
    name: string;
    age: number;
    position: string;
}

class Manager implements Employee {
    name: string;
    age: number;
    position: string;
    
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}

const manager1 = new Manager("John Doe", 35, "Project Manager");

console.log(manager1);
//Interface for an Object:An interface can be used to define the shape of an object, specifying the required properties and their types. 
interface Product {
    id: number;
    name: string;
    price: number;
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 1200
};

console.log(product);
//Interface with Method Signatures
interface Calculator1 {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

class SimpleCalculator1 implements Calculator1 {
    add(a: number, b: number): number {
        return a + b;
    }
    
    subtract(a: number, b: number): number {
        return a - b;
    }
}

const calc = new SimpleCalculator1();

console.log(calc.add(5, 3));
console.log(calc.subtract(9, 4));
//Type aliases
type Point = {
    x: number;
    y: number;
};

type Shape = "circle" | "square" | "rectangle";

function drawShape(shape: Shape, position: Point): void {
    console.log(`Drawing a ${shape} at (${position.x}, ${position.y})`);
}

drawShape("circle", { x: 10, y: 20 });

type UserProfile = {
    username: string;
    email: string;
    age: number;
};

const user: UserProfile = {
    username: "Akshit Saxena",
    email: "akshit.saxena@geeksforgeeks.com",
    age: 24,
};

function greetUser1(profile: UserProfile): string 
{
    return `Hello, ${profile.username}!  You are ${profile.age} years old.  Your email is ${profile.email}.`;
}

console.log(greetUser1(user));
//Classes in Typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("Alice", 25);
console.log(person1.introduce());
//Example-2
class BankAccount {
  accountHolder: string;
  balance: number;

  constructor(accountHolder: string, initialBalance: number) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  getBalance(): string {
    return `The balance for ${this.accountHolder} is $${this.balance}`;
  }
}
const account = new BankAccount("John Doe", 500);
account.deposit(200);
console.log(account.getBalance());
//Getter and Setter in Typescript
class Person1 {
  private _firstName: string = '';
  private _lastName: string = '';

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(name: string) {
    const parts = name.split(' ');
    if (parts.length === 2) {
      this._firstName = parts[0];
      this._lastName = parts[1];
    } else {
      console.error('Invalid full name format');
    }
  }
}

const person2 = new Person1();
person2.fullName = 'John Doe';
console.log(person2.fullName);
person2.fullName = 'John';