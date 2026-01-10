from abc import ABC, abstractmethod
class Employee(ABC):
    def __init__(self, name, emp_id):
        self.name = name
        self.id = emp_id

    # Abstract method
    @abstractmethod
    def calculate_salary(self):
        pass

    def get_details(self):
        return f"ID: {self.id}, Name: {self.name}"


class FullTimeEmployee(Employee):
    def __init__(self, name, emp_id, monthly_salary):
        super().__init__(name, emp_id)
        self.monthly_salary = monthly_salary

    def calculate_salary(self):
        return self.monthly_salary


class Contractor(Employee):
    def __init__(self, name, emp_id, hours_worked, hourly_rate):
        super().__init__(name, emp_id)
        self.hours_worked = hours_worked
        self.hourly_rate = hourly_rate

    def calculate_salary(self):
        return self.hours_worked * self.hourly_rate


class PayrollSystem:
    @staticmethod
    def show_payroll(employee: Employee):
        print(f"{employee.get_details()} | Salary: ${employee.calculate_salary()}")


# Main execution
if __name__ == "__main__":
    # Abstract reference type usage
    emp1 = FullTimeEmployee("Alice", 101, 5000)
    emp2 = Contractor("Bob", 102, 40, 50)

    PayrollSystem.show_payroll(emp1)
    PayrollSystem.show_payroll(emp2)
