abstract class Employee {
    String name;
    int id;

    // Abstract method: Every employee has a salary, but calculation differs
    abstract double calculateSalary();

    public Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public String getDetails() {
        return "ID: " + id + ", Name: " + name;
    }
}

class FullTimeEmployee extends Employee {
    double monthlySalary;

    public FullTimeEmployee(String name, int id, double monthlySalary) {
        super(name, id);
        this.monthlySalary = monthlySalary;
    }

    @Override
    double calculateSalary() {
        return monthlySalary;
    }
}

class Contractor extends Employee {
    int hoursWorked;
    double hourlyRate;

    public Contractor(String name, int id, int hoursWorked, double hourlyRate) {
        super(name, id);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    @Override
    double calculateSalary() {
        return hoursWorked * hourlyRate;
    }
}
public class PayrollSystem {
    public static void main(String[] args) {
        // We use the abstract type 'Employee' for the reference
        Employee emp1 = new FullTimeEmployee("Alice", 101, 5000);
        Employee emp2 = new Contractor("Bob", 102, 40, 50);

        
        showPayroll(emp1);
        showPayroll(emp2);
    }

    public static void showPayroll(Employee e) {
        System.out.println(e.getDetails() + " | Salary: $" + e.calculateSalary());
    }
}