abstract class Employee {
    protected name: string;
    protected id: number;

    // Abstract method: Every employee has a salary, but calculation differs
    abstract calculateSalary(): number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

class FullTimeEmployee extends Employee {
    private monthlySalary: number;

    constructor(name: string, id: number, monthlySalary: number) {
        super(name, id);
        this.monthlySalary = monthlySalary;
    }

    calculateSalary(): number {
        return this.monthlySalary;
    }
}

class Contractor extends Employee {
    private hoursWorked: number;
    private hourlyRate: number;

    constructor(name: string, id: number, hoursWorked: number, hourlyRate: number) {
        super(name, id);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    calculateSalary(): number {
        return this.hoursWorked * this.hourlyRate;
    }
}

class PayrollSystem {
    static main(): void {
        // We use the abstract type 'Employee' for the reference
        const emp1: Employee = new FullTimeEmployee("Alice", 101, 5000);
        const emp2: Employee = new Contractor("Bob", 102, 40, 50);

        PayrollSystem.showPayroll(emp1);
        PayrollSystem.showPayroll(emp2);
    }

    static showPayroll(e: Employee): void {
        console.log(`Details |${e.getDetails()} | Salary: $${e.calculateSalary()}`);
    }   
}

// Run the program
PayrollSystem.main();
