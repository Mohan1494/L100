package Inheritance;

// Base Interface
interface UniversityMember {
    void showID();
}

// First Branch
interface Staff extends UniversityMember {
    void showSalary();
}

// Second Branch
interface Student extends UniversityMember {
    void showCredits();
}

// Multi-inheriting Interface
class GraduateInstructor implements Staff, Student {

    public void showID() {
        System.out.println("ID: U12345");
    }

    public void showSalary() {
        System.out.println("Salary: ₹25,000");
    }

    public void showCredits() {
        System.out.println("Credits: 12");
    }
}

public class Hybrid {
    public static void main(String[] args) {
        GraduateInstructor gi = new GraduateInstructor();
        gi.showID();
        gi.showSalary();
        gi.showCredits();
    }
}

